const error = require('./error');
const hello = require('./hello');
const notFound = require('./not-found');
const status = require('./status');

module.exports = function routes(app) {
  app.get('/', status);
  app.get('/hello/:id', hello);
  app.get('/error', error);
  // app.get('/path/to/route', func)
  app.get('*', notFound);
};
