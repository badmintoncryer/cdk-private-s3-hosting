import { IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App, Stack } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { PrivateS3Hosting } from '../src';

const app = new App();
const stack = new Stack(app, 'IntegStack');

const privateS3Hosting = new PrivateS3Hosting(stack, 'PrivateS3Hosting', {
  domainName: 'example.com',
});

const cloudShellSg = new ec2.SecurityGroup(stack, 'CloudShellSg', {
  vpc: privateS3Hosting.vpc,
});
cloudShellSg.connections.allowTo(privateS3Hosting.alb, ec2.Port.tcp(80));

new IntegTest(app, 'IntegTest', {
  testCases: [stack],
});
