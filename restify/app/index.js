const app = require('restify').createServer();
const logger = require('./lib/logger');

// mount middleware
app.pre(require('./middleware/init'));
app.use(require('./middleware/auth'));

require('./routes')(app); // routes

app.on('restifyError', require('./middleware/error'));

const PORT = 8080;
app.listen(PORT, () => {
  logger.info(`listening on port: ${PORT}`);
});
