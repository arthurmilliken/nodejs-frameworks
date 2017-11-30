module.exports = (req, res, next) => {
  const err = new Error('The requested resource could not be found.');
  err.status = 404;
  next(err);
};
