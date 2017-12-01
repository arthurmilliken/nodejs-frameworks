const restify = require('restify');
const logger = require('./lib/logger');

const app = restify.createServer();

// mount middleware
app.pre(require('./middleware/init'));
app.use(require('./middleware/auth'));

app.use(restify.plugins.queryParser());

require('./routes')(app); // routes

app.on('restifyError', require('./middleware/error'));

const PORT = 8080;
app.listen(PORT, () => {
  logger.info(`listening on port: ${PORT}`);
});
