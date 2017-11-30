const Router = require('koa-router');

const hello = require('./hello');
const status = require('./status');

module.exports = function routes(app) {
  const router = new Router();

  router.get('/', status);
  router.get('/hello/:id', hello);
  router.get('/error', (ctx) => {
    ctx.throw(400, 'This is a generated error.');
  });
  // router.get('/path/to/route', func)

  app.use(router.routes());
};
