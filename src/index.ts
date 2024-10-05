import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as targets from 'aws-cdk-lib/aws-elasticloadbalancingv2-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export interface PrivateS3HostingProps {
  readonly domainName: string;
  readonly certificate?: acm.ICertificate;
  readonly enablePrivateDns?: boolean;
  readonly s3InterfaceEndpoint?: ec2.IInterfaceVpcEndpoint;
  readonly bucketProps?: s3.BucketProps;
  readonly internetFacing?: boolean;
  readonly vpc?: ec2.IVpc;
}

export class PrivateS3Hosting extends Construct {
  public readonly bucket: s3.Bucket;
  public readonly alb: elbv2.ApplicationLoadBalancer;
  constructor(scope: Construct, id: string, props?: PrivateS3HostingProps) {
    super(scope, id);

    const vpc = props?.vpc ?? new ec2.Vpc(this, 'Vpc', {
      maxAzs: 2,
      natGateways: 0,
    });

    const vpcEndpoint = props?.s3InterfaceEndpoint ?? new ec2.InterfaceVpcEndpoint(this, 'S3Endpoint', {
      service: ec2.InterfaceVpcEndpointAwsService.S3,
      vpc,
    });

    const vpcEndpointIps = ['192.168.1.24'];

    const bucket = new s3.Bucket(this, 'Bucket', {
      ...props?.bucketProps,
      bucketName: props?.domainName,
    });
    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [bucket.bucketArn + '/*'],
      principals: [new iam.AnyPrincipal()],
      conditions: {
        StringEquals: {
          'aws:sourceVpce': vpcEndpoint.vpcEndpointId,
        },
      },
    }));

    const alb = new elbv2.ApplicationLoadBalancer(this, 'Alb', {
      vpc,
      internetFacing: props?.internetFacing ?? false,
    });

    const isTls = !!props?.certificate;
    const listener = alb.addListener('Listener', {
      port: isTls ? 443 : 80,
      protocol: isTls ? elbv2.ApplicationProtocol.HTTPS : elbv2.ApplicationProtocol.HTTP,
      certificates: isTls ? [props!.certificate!] : undefined,
    });

    listener.addTargets('Target', {
      port: 443,
      targets: vpcEndpointIps.map((ip) => new targets.IpTarget(ip)),
    });
  }
}