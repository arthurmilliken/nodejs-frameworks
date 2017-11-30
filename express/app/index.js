const app = require('express')();
const logger = require('./lib/logger');

// mount middleware
app.use(require('./middleware/init'));
app.use(require('./middleware/auth'));

require('./routes')(app); // routes

app.use(require('./middleware/logging'));
app.use(require('./middleware/error'));

const PORT = 8080;
app.listen(PORT, () => {
  logger.info(`listening on port: ${PORT}`);
});
