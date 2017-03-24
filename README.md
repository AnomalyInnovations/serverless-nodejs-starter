# Serverless ES6 Starter
A starter project for the Serverless Framework with ES6 support

This uses the [serverless-webpack](https://github.com/elastic-coders/serverless-webpack) plugin and Babel. It supports:

- ES6 syntax in your handler functions
  - Use async/await
  - The spread operator
  - And much more!
- Automatically handles multiple functions

If you'd like to setup your existing Serverless project manually to support ES6, use this [guide on Serverless-Stack.com](http://serverless-stack.com/chapters/add-support-for-es6-javascript.html).

---

## Demo

A demo version of this project is hosted on AWS - [`https://bl8f1y6kfl.execute-api.us-east-1.amazonaws.com/dev/hello`](https://bl8f1y6kfl.execute-api.us-east-1.amazonaws.com/dev/hello)

And here is the ES6 source behind it

``` javascript
export const hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
      input: event,
    }),
  };

  callback(null, response);
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) => 
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
```

## Requirements

- [Install the Serverless Framework](http://serverless-stack.com/chapters/setup-the-serverless-framework.html)
- [Configure your AWS CLI](http://serverless-stack.com/chapters/configure-the-aws-cli.html)

## Install

``` bash
$ git clone https://github.com/AnomalyInnovations/serverless-es6-starter.git
```

Enter the new directory

``` bash
$ cd serverless-es6-starter
```

Install the Node.js packages

``` bash
$ npm install
```

## Usage

To run a function on your local

``` bash
$ serverless webpack invoke --function hello
```

And to deploy

``` bash
serverless deploy
```

To add another function as a new file to your project, simply add the new file and add the reference to `serverless.yml`. The `webpack.config.js` automatically handles functions in different files.

## Support

- Send us an [email](mailto:contact@anoma.ly) if you have any questions
- Open a [new issue](https://github.com/AnomalyInnovations/serverless-es6-starter/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!
