import { Stack, StackProps, aws_s3, RemovalPolicy } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda-nodejs";

export class AwscdkIntroStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const greetingTrashcan = new aws_s3.Bucket(this, "my-social-anxiety", {
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const greeterLambda = new lambda.NodejsFunction(this, "greeter-lambda", {
      environment: {
        bucket: greetingTrashcan.bucketName,
      },
    });

    greetingTrashcan.grantWrite(greeterLambda);
  }
}
