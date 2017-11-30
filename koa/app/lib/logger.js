function log(msg, level) {
  console.log(`${level}: ${msg}`);
}

function info(msg) {
  log(msg, 'INFO');
}

function error(msg) {
  console.error(`ERROR: ${msg}`);
}

module.exports = {
  log, info, error,
};
