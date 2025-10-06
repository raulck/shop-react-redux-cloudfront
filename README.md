# React-shop-cloudfront

## CloudX: AWS Practitioner for JS

### Assignment 4 - Integration with NoSQL Database

#### Tasks

- created two database tables in DynamoDB: products and stock table
- wrote a script to fill tables with test examples (seed-tables.ts)
- integrated the getProductsList lambda to return via GET /products request a list of products from the database (joined stock and products tables) and implemented product model on FE side - [My shop app](https://d1kq5q0usw740u.cloudfront.net)

- created lambda function getProductsList
- available through url - [Products list](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/products)

- created lambda function getProductsById
- available through url - [Product by id](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/products/f1e29929-44cf-400a-b9bf-edcb050e32ab)
- implemented error message for not available id - [Product by id error](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/products/99)

- created a lambda function called createProduct under Product Service which is triggered by the HTTP POST method via /products url

- swagger - [https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/swagger](https://himujifavc.execute-api.eu-north-1.amazonaws.com/dev/swagger)

- ESBuild configured for product service, basic tests implemented, code separated, main error scenarios handled

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
