# React-shop-cloudfront

## CloudX: AWS Practitioner for JS

### Assignment 6 - SQS & SNS, Async Microservices Communication

#### Tasks - what was done

- Lambda function catalogBatchProcess was created and triggered by the SQS queue with a batch size of 5, processing messages to create products
- SQS queue catalogItemsQueue was created and configured in the CDK stack
- Lambda function importFileParser in the Import Service was updated to send each CSV record to SQS
- SNS topic createProductTopic with an email subscription was created in the product service stack
- Lambda function catalogBatchProcess was updated to send an event to the SNS topic after creating products
- A Filter Policy was set for SNS createProductTopic and an additional email subscription was created based on product attribute filter

- ESBuild configured for product service, basic tests implemented, code separated, main error scenarios handled

##### Frontend

- [My shop app](https://dfdplm1nzmulx.cloudfront.net)

##### Backend

- available through url - [Products list](https://q7dk10iy6j.execute-api.eu-north-1.amazonaws.com/dev/products)

- available through url - [Product by id](https://q7dk10iy6j.execute-api.eu-north-1.amazonaws.com/dev/products/c6b0b426-c432-42d6-a26f-824968cbd103)
- error message for not available id - [Product by id error](https://q7dk10iy6j.execute-api.eu-north-1.amazonaws.com/dev/products/99)

- [BE - import service url](https://hzj9gaq0d7.execute-api.eu-north-1.amazonaws.com/dev/)
- [BE - product service url](https://q7dk10iy6j.execute-api.eu-north-1.amazonaws.com/dev/)

- swagger - [https://q7dk10iy6j.execute-api.eu-north-1.amazonaws.com/dev/swagger](https://q7dk10iy6j.execute-api.eu-north-1.amazonaws.com/dev/swagger)

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
