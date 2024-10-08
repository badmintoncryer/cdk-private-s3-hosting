import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as targets from 'aws-cdk-lib/aws-elasticloadbalancingv2-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { InterfaceVpcEndpointWithPrivateIp } from './constructs/interface-vpc-endpoint-with-private-ip';

export interface PrivateS3HostingProps {
  readonly domainName: string;
  readonly certificate?: acm.ICertificate;
  readonly enablePrivateDns?: boolean;
  readonly bucketProps?: s3.BucketProps;
  readonly internetFacing?: boolean;
  readonly vpc?: ec2.IVpc;
}

export class PrivateS3Hosting extends Construct {
  public readonly bucket: s3.Bucket;
  public readonly alb: elbv2.ApplicationLoadBalancer;
  public readonly vpc: ec2.IVpc;
  constructor(scope: Construct, id: string, props?: PrivateS3HostingProps) {
    super(scope, id);

    this.vpc = props?.vpc ?? new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2,
      natGateways: 0,
    });
    this.vpc.addGatewayEndpoint('S3GatewayEndpoint', {
      service: ec2.GatewayVpcEndpointAwsService.S3,
    });

    const vpcEndpoint = new InterfaceVpcEndpointWithPrivateIp(this, 'S3InterfaceEndpoint', {
      service: ec2.InterfaceVpcEndpointAwsService.S3,
      vpc: this.vpc,
    });

    this.bucket = new s3.Bucket(this, 'Bucket', {
      ...props?.bucketProps,
      bucketName: props?.domainName,
    });
    this.bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [this.bucket.bucketArn, this.bucket.arnForObjects('*')],
      principals: [new iam.AnyPrincipal()],
      conditions: {
        StringEquals: {
          'aws:sourceVpce': vpcEndpoint.vpcEndpointId,
        },
      },
    }));

    this.alb = new elbv2.ApplicationLoadBalancer(this, 'Alb', {
      vpc: this.vpc,
      internetFacing: props?.internetFacing ?? false,
    });

    const isTls = !!props?.certificate;
    const listener = this.alb.addListener('Listener', {
      port: isTls ? 443 : 80,
      protocol: isTls ? elbv2.ApplicationProtocol.HTTPS : elbv2.ApplicationProtocol.HTTP,
      certificates: isTls ? [props!.certificate!] : undefined,
    });

    listener.addTargets('Target', {
      port: 443,
      targets: vpcEndpoint.vpcEndpointPrivateIps.map((ip) => new targets.IpTarget(ip)),
    });

    if (props?.enablePrivateDns) {
      const hostedzone = new route53.HostedZone(this, 'HostedZone', {
        zoneName: props.domainName,
      });
      new route53.CnameRecord(this, 'CnameRecord', {
        zone: hostedzone,
        recordName: props.domainName,
        domainName: this.alb.loadBalancerDnsName,
      });
    };
  }
}