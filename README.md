# Serverless ES7 async/await

A Serverless service that adds ES7 async/await support. Part of the [Serverless Stack](http://serverless-stack.com) guide.

This uses the [serverless-webpack](https://github.com/elastic-coders/serverless-webpack) plugin and Babel. It supports:

- **ES7 syntax in your handler functions**
  - Use async/await
  - The spread operator
  - And much more!
- **Sourcemaps for proper error messages**
  - Error message show the correct line numbers
  - Works in production with CloudWatch
- **Automatic support for multiple handler files**
  - No need to add a new entry to your `webpack.config.js`

If you'd like to learn how to setup your existing Serverless project to support ES7 async/await, use this [guide on Serverless-Stack.com](http://serverless-stack.com/chapters/add-support-for-es6-javascript.html).

---

### Demo

A demo version of this service is hosted on AWS - [`https://ndgmy14knc.execute-api.us-east-1.amazonaws.com/dev/hello`](https://ndgmy14knc.execute-api.us-east-1.amazonaws.com/dev/hello)

And here is the ES7 source behind it

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

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project with ES7 support.

``` bash
$ serverless install --url https://github.com/AnomalyInnovations/serverless-es7 --name my-project
```

Enter the new directory

``` bash
$ cd my-project
```

Install the Node.js packages

``` bash
$ npm install
```

### Usage

To run a function on your local

``` bash
$ serverless webpack invoke --function hello
```

And to deploy

``` bash
$ serverless deploy
```

To add another function as a new file to your project, simply add the new file and add the reference to `serverless.yml`. The `webpack.config.js` automatically handles functions in different files.

### How It Works

To ensure that you get all the ES7 capabilities while showing proper error messages and seamlessly integrating with the rest of your project, we do the following:

- The `webpack.config.js` loads all your handlers from the `serverless.yml` and transpiles them using Babel. This means that you don't have to edit the `webpack.config.js` when you add a new handler file.
- Generate the sourcemaps for all the transpiled files and load the sourcemaps in each of the handler files.
- Catch and log any unhandled exceptions to ensure that async functions can log errors.

The result is that you should see proper error messages in your CloudWatch or console logs.

### Support

- Send us an [email](mailto:contact@anoma.ly) if you have any questions
- Open a [new issue](https://github.com/AnomalyInnovations/serverless-es7/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!
