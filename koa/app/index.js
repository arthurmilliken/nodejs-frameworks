const Koa = require('koa');
const logger = require('./lib/logger');

const app = new Koa();

// mount middleware
app.use(require('./middleware/error'));
app.use(require('./middleware/logging'));
app.use(require('./middleware/auth'));
// app.use(require('./middleware/module-name'));

// mount routes
require('./routes')(app);

const PORT = 8080;
app.listen(PORT);
logger.info(`koa - listening on port: ${PORT}`);
