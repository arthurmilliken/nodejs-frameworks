const errs = require('restify-errors');

module.exports = (req, res, next) => {
  const err = new errs.InternalServerError('This is a generated error.');
  return next(err);
};
