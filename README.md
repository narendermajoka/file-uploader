This project is for demonstartion of deploying angular webapp on serverless platform(AWS for now)

Following steps are followed to create this app.

Step1: npm install -g serverless
Step2: serverless config credentials --provider aws --key YOUR_PUBLIC_KEY --secret YOUR_SECRET_KEY
Step3: ng new "file-uploader"
step4: cd to project and write command ng add @ng-toolkit/serverless --provider aws
step5: npm run build:serverless:deploy

Notes:
1. getting error related to webpack? replace webpack-cli version in package.json with version 3.0.4
2. getting error related to @types/nodes? replaced nodes key in tsconfig.json and tsconfig.app.json

links:
https://www.npmjs.com/package/serverless
https://github.com/maciejtreder/ng-toolkit/tree/master/schematics/serverless

All the credit goes to respective developers. :)