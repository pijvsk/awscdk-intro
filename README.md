# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template

# Step by step guide to setting up new repo

0. if using several aws cli roles `export AWS_PROFILE=totally-devops-role`
1. `npm install -g aws-cdk`
2. in an empty folder - `cdk init app --language typescript`
3. run bootstrap `cdk bootstrap`
4. in `bin/awscdk-intro.ts` use env information `env: { account: '520246437484', region: 'eu-central-1' },`
   ?. add esbuild to be able to bundle lambda locally `npm install --save-dev esbuild@0`
5. `npm run build`
6. `cdk deploy`
