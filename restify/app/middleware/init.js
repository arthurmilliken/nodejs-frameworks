module.exports = (req, res, next) => {
  res.locals = {};
  res.locals.start = Date.now();
  next();
};
