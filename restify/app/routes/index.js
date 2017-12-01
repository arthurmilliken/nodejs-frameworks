const error = require('./error');
const hello = require('./hello');
const logging = require('../middleware/logging');
const status = require('./status');

module.exports = function routes(app) {
  app.get('/', status, logging);
  app.get('/hello/:id', hello, logging);
  app.get('/error', error);
  // app.get('/path/to/route', func)
};
