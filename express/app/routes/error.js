module.exports = (req, res, next) => {
  const err = new Error('This is a generated error.');
  err.status = 400;
  next(err);
};
