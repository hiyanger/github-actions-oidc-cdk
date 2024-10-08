import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class GithubActionsOidcCdkServerlessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'CreateBucket', {
      bucketName: "github-actions-oidc-cdk-20240831",
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
  }
}