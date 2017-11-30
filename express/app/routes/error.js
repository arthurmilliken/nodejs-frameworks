module.exports = (req, res, next) => {
  next(new Error('This is a generated error.'));
};
