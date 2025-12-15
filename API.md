# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateS3Hosting <a name="PrivateS3Hosting" id="cdk-private-s3-hosting.PrivateS3Hosting"></a>

A construct to host a private S3 website.

#### Initializers <a name="Initializers" id="cdk-private-s3-hosting.PrivateS3Hosting.Initializer"></a>

```typescript
import { PrivateS3Hosting } from 'cdk-private-s3-hosting'

new PrivateS3Hosting(scope: Construct, id: string, props: PrivateS3HostingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps">PrivateS3HostingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-private-s3-hosting.PrivateS3Hosting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-private-s3-hosting.PrivateS3Hosting.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-private-s3-hosting.PrivateS3Hosting.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-private-s3-hosting.PrivateS3HostingProps">PrivateS3HostingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-private-s3-hosting.PrivateS3Hosting.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-private-s3-hosting.PrivateS3Hosting.isConstruct"></a>

```typescript
import { PrivateS3Hosting } from 'cdk-private-s3-hosting'

PrivateS3Hosting.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-private-s3-hosting.PrivateS3Hosting.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.property.alb">alb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer</code> | The ALB to access the website. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | The S3 bucket for hosting the website. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3Hosting.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The hosted zone for the website. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-private-s3-hosting.PrivateS3Hosting.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `alb`<sup>Required</sup> <a name="alb" id="cdk-private-s3-hosting.PrivateS3Hosting.property.alb"></a>

```typescript
public readonly alb: ApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.ApplicationLoadBalancer

The ALB to access the website.

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-private-s3-hosting.PrivateS3Hosting.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

The S3 bucket for hosting the website.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="cdk-private-s3-hosting.PrivateS3Hosting.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC.

---

##### `hostedZone`<sup>Optional</sup> <a name="hostedZone" id="cdk-private-s3-hosting.PrivateS3Hosting.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The hosted zone for the website.

---


## Structs <a name="Structs" id="Structs"></a>

### PrivateS3HostingProps <a name="PrivateS3HostingProps" id="cdk-private-s3-hosting.PrivateS3HostingProps"></a>

Properties for PrivateS3Hosting.

#### Initializer <a name="Initializer" id="cdk-private-s3-hosting.PrivateS3HostingProps.Initializer"></a>

```typescript
import { PrivateS3HostingProps } from 'cdk-private-s3-hosting'

const privateS3HostingProps: PrivateS3HostingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.bucketProps">bucketProps</a></code> | <code>aws-cdk-lib.aws_s3.BucketProps</code> | The properties for the S3 bucket. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.domainName">domainName</a></code> | <code>string</code> | The domain name for the website. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | The certificate for the website. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.enablePrivateDns">enablePrivateDns</a></code> | <code>boolean</code> | Enable private DNS for the website. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.internetFacing">internetFacing</a></code> | <code>boolean</code> | Whether the ALB is internet facing. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.subDomain">subDomain</a></code> | <code>string</code> | The sub domain for the website. |
| <code><a href="#cdk-private-s3-hosting.PrivateS3HostingProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC for the website. |

---

##### `bucketProps`<sup>Required</sup> <a name="bucketProps" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.bucketProps"></a>

```typescript
public readonly bucketProps: BucketProps;
```

- *Type:* aws-cdk-lib.aws_s3.BucketProps
- *Default:* use default properties

The properties for the S3 bucket.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The domain name for the website.

S3 bucket name will be created with `domainName`.

If `enablePrivateDns` is enabled,
a private hosted zone also will be created for the `domainName`
and an A record has been created from `domainName` to the ALB DNS name.".

If `subDomein` is provided, these names will be `${subDomain}.${domainName}`.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate
- *Default:* use HTTP

The certificate for the website.

---

##### `enablePrivateDns`<sup>Optional</sup> <a name="enablePrivateDns" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.enablePrivateDns"></a>

```typescript
public readonly enablePrivateDns: boolean;
```

- *Type:* boolean
- *Default:* true

Enable private DNS for the website.

By eneabling this, a private hosted zone will be created for the domain name
and an alias record will be created for the ALB

You can access to the alb by the `http(s)://<domainName>` from the VPC

---

##### `internetFacing`<sup>Optional</sup> <a name="internetFacing" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.internetFacing"></a>

```typescript
public readonly internetFacing: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the ALB is internet facing.

---

##### `subDomain`<sup>Optional</sup> <a name="subDomain" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.subDomain"></a>

```typescript
public readonly subDomain: string;
```

- *Type:* string
- *Default:* no sub domain

The sub domain for the website.

S3 bucket name will be created with `${subDomain}.{domainName}`.

If `enablePrivateDns` is enabled,
a private hosted zone also will be created for the `domainName`
and an A record has been created from `${subDomain}.${domainName}` to the ALB DNS name.".

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* create a new VPC with 2 AZs and 0 NAT gateways

The VPC for the website.

---



