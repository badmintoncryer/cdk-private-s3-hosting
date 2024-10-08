# CDK Private S3 Hosting Construct

This is a CDK construct that creates a private S3 bucket and an Application Load Balancer (ALB) with a listener rule that forwards requests to the S3 bucket.

You can use this construct for a enterprise use case where you want to host a static website in a private network.

Original idea is from [this blog post](https://aws.amazon.com/jp/blogs/networking-and-content-delivery/hosting-internal-https-static-websites-with-alb-s3-and-privatelink/).

## Architecture



## Usage

To create a private S3 bucket and an ALB with a listener rule that forwards requests to the S3 bucket, you can use the following code:

```typescript
import { PrivateS3Hosting } from 'cdk-private-s3-hosting';

const privateS3Hosting = new PrivateS3Hosting(this, 'PrivateS3Hosting', {
  domainName: 'cryer-nao-domain.com',
});
```

After you deploy the stack, you can access the S3 bucket using the ALB's DNS name from the VPC where the stack is deployed.

For example, if you put the `hoge.txt` file in the S3 bucket, you can access it using the following command:

```sh
curl http://cryer-nao-domain.com/hoge.txt
```

### Deploy the frontend assets

You can deploy the frontend assets to the S3 bucket like below:

```typescript
import { PrivateS3Hosting } from 'cdk-private-s3-hosting';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

const privateS3Hosting = new PrivateS3Hosting(this, 'PrivateS3Hosting', {
  domainName: 'cryer-nao-domain.com',
});

new s3deploy.BucketDeployment(this, 'DeployWebsite', {
  sources: [s3deploy.Source.asset('./website-dist')],
  destinationBucket: websiteBucket,
  bucket: privateS3Hosting.bucket,
});
```

After deploying the stack, you can access the website using the `domainName` you specified from the VPC.

```sh
curl http://cryer-nao-domain.com
```

**Note**: All access to the path pattern `*/` will be redirected to `/index.html`. Therefore, it will function correctly even when the path is set on the frontend and the page is reloaded.
