import { S3 } from "aws-sdk";


const bucketName = process.env.bucket!;
export const handler = async function (event: any, context: any) {
    try {
        const body = 'hello world';
        const s3 = new S3();
        await s3.upload({
            Bucket: bucketName,
            Key: `${new Date().getTime()}`,
            Body: body
        }).promise()

      
        return body;
    } catch(e) {
        console.log(e);
        throw e;
    }
}