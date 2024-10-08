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

##### ~~`isConstruct`~~ <a name="isConstruct" id="cdk-private-s3-hosting.PrivateS3Hosting.isConstruct"></a>

```typescript
import { PrivateS3Hosting } from 'cdk-private-s3-hosting'

PrivateS3Hosting.isConstruct(x: any)
```

Checks if `x` is a construct.

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

This will be used to create the S3 bucket and the ALB listener

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

##### `vpc`<sup>Optional</sup> <a name="vpc" id="cdk-private-s3-hosting.PrivateS3HostingProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* create a new VPC with 2 AZs and 0 NAT gateways

The VPC for the website.

---



