const { send, createError } = require('micro');

const {
  parseRemoteAddress,
  parseRemoteLanguages,
  parseRemoteOperatingSystem,
  createRemoteInfo,
} = require('./lib');

function createResponse(req) {
  const address = parseRemoteAddress(req);
  const os = parseRemoteOperatingSystem(req);
  const languages = parseRemoteLanguages(req);
  return createRemoteInfo(address, languages, os);
}

function createErrorResponse(req) {
  throw createError(
    404,
    `Wrong URL detected\nPlease use ${req.headers.host}/api/whoami`,
  );
}

function pathHandler(req) {
  if (req.url === '/api/whoami') {
    return createResponse(req);
  }
  return createErrorResponse(req);
}

module.exports = (req, res) => {
  send(res, 200, pathHandler(req));
};
