export default func => (event, context, callback) => {
  /* eslint no-param-reassign: "off" */
  context.callbackWaitsForEmptyEventLoop = false;
  func(event, context, callback);
};
