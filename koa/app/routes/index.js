const Router = require('koa-router');

const error = require('./error');
const hello = require('./hello');
const notFound = require('./not-found');
const status = require('./status');

module.exports = function routes(app) {
  const router = new Router();

  router.get('/', status);
  router.get('/hello/:id', hello);
  router.get('/error', error);
  // router.get('/path/to/route', func)
  router.get('*', notFound);

  app.use(router.routes());
};
