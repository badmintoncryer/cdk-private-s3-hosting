import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Kazuho CryerShinozuka',
  authorAddress: 'malaysia.cryer@gmail.com',
  cdkVersion: '2.130.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: 'cdk-private-s3-hosting',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/badmintoncryer/cdk-private-s3-hosting.git',
  keywords: ['aws', 'cdk', 'ec2', 'nodejs', 'aws-cdk', 'vscode'],
  gitignore: ['*.js', '*.d.ts', '!test/.*.snapshot/**/*', '.tmp'],
  deps: [],
  description: 'CDK Construct for a private frontend hosting S3 bucket',
  devDeps: [
    '@aws-cdk/integ-runner@2.130.0-alpha.0',
    '@aws-cdk/integ-tests-alpha@2.130.0-alpha.0',
  ],
  releaseToNpm: true,
  packageName: 'cdk-private-s3-hosting',
  npmTrustedPublishing: true,
  workflowNodeVersion: '24',
  publishToPypi: {
    distName: 'cdk-private-s3-hosting',
    module: 'cdk-private-s3-hosting',
    trustedPublishing: true,
  },
});

project.projectBuild.testTask.exec(
  'yarn tsc -p tsconfig.dev.json && yarn integ-runner',
);
project.synth();