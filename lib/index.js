const useragent = require('useragent');
const Negotiator = require('negotiator');

function parseRemoteAddress(req) {
  return (
    (req.headers['x-forwarded-for'] &&
      req.headers['x-forwarded-for'].split(',').pop()) ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null)
  );
}

function parseRemoteOperatingSystem(req) {
  return useragent.parse(req.headers['user-agent']).os.toString();
}

function parseRemoteLanguages(req) {
  return new Negotiator(req).languages();
}

function createRemoteInfo(ip, languages, os) {
  return {
    ip,
    languages,
    os,
  };
}

module.exports = {
  parseRemoteAddress,
  parseRemoteLanguages,
  parseRemoteOperatingSystem,
  createRemoteInfo,
};
