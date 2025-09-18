# React-shop-cloudfront

## CloudX: AWS Practitioner for JS

### Assignment 2 – Serving frontend application

#### Tasks

Manual Deployment:

- created and configured an S3 bucket
- built and manually uploaded the app to the created S3 bucket
- created CloudFront distribution for the app
- updated policy for previously created S3 bucket
- created and tested CloudFront invalidations and custom error page

Links after created CloudFront distribution and updated bucket policy:

- [S3-website](https://myshopfrontapp.s3.eu-north-1.amazonaws.com/) - shows 403 Access Denied error
- [CloudFront website](https://d1qqnb06cxsff6.cloudfront.net/) - site is served now with CloudFront and is available through the Internet over CloudFront URL

Automated Deployment

- installed and configured AWS CDK
- AWS CDK constructs are added and configured
- added necessary npm script(s) and code changes to synthesize, build and deploy app from local machine
- [CDK deployed website url](https://d1t0jc81ahdh84.cloudfront.net/)

## Steps for deployment

### Step 1: Build the React app

Navigate to the root directory of your React app and install dependencies.

#### `install`

Build the React app for production `dist` folder.

#### `build`

### Step 2: Install CDK Dependencies

Navigate to the cdk/ folder.

#### `cd cdk`

Install dependencies for the CDK project.

#### `install`

### Step 3: Bootstrap AWS Environment

Ensure you are in the cdk/ folder

#### `cd cdk`

Bootstrap your AWS environment

#### `cdk bootstrap`

If deploying to a specific AWS account and region, specify them explicitly

#### `cdk bootstrap aws://<account-id>/<region>`

### Step 4: Deploy the CDK Stack

Ensure you are in the cdk/ folder

#### `cd cdk`

Deploy the stack

#### `cdk deploy`

Wait for the deployment to complete. Once done, the terminal will output the S3 bucket URL or CloudFront URL.

## Cleaning up

### To delete all resources created by the CDK stack

Ensure you are in the cdk/ folder

#### `cd cdk`

Run the destroy command

#### `cdk destroy`

##

This is frontend starter project for nodejs-aws mentoring program updated with automation for CDK deployment using AWS services. It uses the following technologies:

- [Vite](https://vitejs.dev/) as a project bundler
- [React](https://beta.reactjs.org/) as a frontend framework
- [React-router-dom](https://reactrouterdotcom.fly.dev/) as a routing library
- [MUI](https://mui.com/) as a UI framework
- [React-query](https://react-query-v3.tanstack.com/) as a data fetching library
- [Formik](https://formik.org/) as a form library
- [Yup](https://github.com/jquense/yup) as a validation schema
- [Serverless](https://serverless.com/) as a serverless framework
- [Vitest](https://vitest.dev/) as a test runner
- [MSW](https://mswjs.io/) as an API mocking library
- [Eslint](https://eslint.org/) as a code linting tool
- [Prettier](https://prettier.io/) as a code formatting tool
- [TypeScript](https://www.typescriptlang.org/) as a type checking tool
