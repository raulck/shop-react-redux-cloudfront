# React-shop-cloudfront

## CloudX: AWS Practitioner for JS

### Assignment 5 - Integration with S3

#### Tasks - what was done

- ImportServiceStack was created and repository structure updated (import-service-stack.ts added) in lib folder
- S3 bucket was defined and deployed in ImportServiceStack with an 'uploaded' folder
- Lambda function importProductsFile was created and integrated with API Gateway at GET /import
- Function returned [Signed URL with query param](https://u7trhc85wh.execute-api.eu-north-1.amazonaws.com/dev/import?name=test.csv) with query param
- ImportServiceStack was updated with IAM policies and Frontend api path for import string was updated
- Lambda function importFileParser was created and configured to trigger on s3:ObjectCreated events for objects in the 'uploaded' folder and on stream end moved to parsed folder
- import file parser is logged in CloudWatch
- importProductsFile lambda is covered by unit tests

- ESBuild configured for product service, basic tests implemented, code separated, main error scenarios handled

##### Frontend

- [My shop app](https://d1kq5q0usw740u.cloudfront.net)

##### Backend

- available through url - [Products list](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/products)

- available through url - [Product by id](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/products/f1e29929-44cf-400a-b9bf-edcb050e32ab)
- error message for not available id - [Product by id error](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/products/99)

- [BE - import service url](https://u7trhc85wh.execute-api.eu-north-1.amazonaws.com/dev/)
- [BE - product service url](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/)

- swagger - [https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/swagger](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/swagger)

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
