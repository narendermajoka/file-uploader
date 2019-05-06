import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
// import * as AWS from 'aws-sdk';
import * as S3 from 'aws-sdk/clients/s3';
import * as SecretsManager from 'aws-sdk/clients/secretsmanager';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor() { }

  uploadFile(file) {
    const contentType = file.type;

    // const bucket:S3 = new S3(
    //       {
    //           accessKeyId: AWS.config.credentials.accessKeyId,
    //           secretAccessKey: AWS.config.credentials.secretAccessKey,
    //           region: 'us-east-1'
    //       }
    //   );
     const bucket = new S3();
     // bucket.config.region='us-east-1';
      const params = {
          Bucket: 'bucketforimages',
          Key: file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          return true;
      });
    }
 
}
