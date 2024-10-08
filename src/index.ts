import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as targets from 'aws-cdk-lib/aws-elasticloadbalancingv2-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as route53Targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { InterfaceVpcEndpointWithPrivateIp } from './constructs/interface-vpc-endpoint-with-private-ip';

/**
 * Properties for PrivateS3Hosting
 */
export interface PrivateS3HostingProps {
  /**
   * The domain name for the website
   *
   * This will be used to create the S3 bucket and the ALB listener
   */
  readonly domainName: string;

  /**
   * The certificate for the website
   *
   * @default - use HTTP
   */
  readonly certificate?: acm.ICertificate;

  /**
   * Enable private DNS for the website
   *
   * By eneabling this, a private hosted zone will be created for the domain name
   * and an alias record will be created for the ALB
   *
   * You can access to the alb by the `http(s)://<domainName>` from the VPC
   *
   * @default true
   */
  readonly enablePrivateDns?: boolean;

  /**
   * The properties for the S3 bucket
   *
   * @default - use default properties
   */
  readonly bucketProps?: s3.BucketProps;

  /**
   * Whether the ALB is internet facing
   *
   * @default false
   */
  readonly internetFacing?: boolean;

  /**
   * The VPC for the website
   *
   * @default - create a new VPC with 2 AZs and 0 NAT gateways
   */
  readonly vpc?: ec2.IVpc;
}

/**
 * A construct to host a private S3 website
 */
export class PrivateS3Hosting extends Construct {

  /**
   * The S3 bucket for hosting the website
   */
  public readonly bucket: s3.Bucket;

  /**
   * The ALB to access the website
   */
  public readonly alb: elbv2.ApplicationLoadBalancer;

  /**
   * The VPC
   */
  public readonly vpc: ec2.IVpc;

  constructor(scope: Construct, id: string, props: PrivateS3HostingProps) {
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
    listener.addAction('Redirect', {
      priority: 1,
      action: elbv2.ListenerAction.redirect({
        protocol: isTls ? elbv2.ApplicationProtocol.HTTPS : elbv2.ApplicationProtocol.HTTP,
        port: isTls ? '443' : '80',
        path: '/#{path}index.html',
      }),
      conditions: [
        elbv2.ListenerCondition.pathPatterns(['*/']),
      ],
    });
    listener.addTargets('Target', {
      port: 443,
      targets: vpcEndpoint.vpcEndpointPrivateIps.map((ip) => new targets.IpTarget(ip)),
      healthCheck: {
        healthyHttpCodes: '307,405',
      },
    });

    if (props?.enablePrivateDns ?? true) {
      const hostedzone = new route53.PrivateHostedZone(this, 'HostedZone', {
        zoneName: props.domainName,
        vpc: this.vpc,
      });
      new route53.ARecord(this, 'AliasRecord', {
        zone: hostedzone,
        target: route53.RecordTarget.fromAlias(new route53Targets.LoadBalancerTarget(this.alb)),
      });
    };
  }
}