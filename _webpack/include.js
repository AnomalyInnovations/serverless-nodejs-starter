// Add source map support for proper stack traces
require('source-map-support').install();

// Catch all unhandled exceptions and print their stack trace.
// Required if the hanlder function is async, as promises
// can swallow error messages.
process.on('unhandledRejection', function(e) {
  console.error(e.stack);
  process.exit(1);
});
