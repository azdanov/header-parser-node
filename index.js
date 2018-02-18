const useragent = require('useragent');
const Negotiator = require('negotiator');

// api/whoami/
module.exports = (req, res) => {
  const remoteAddress =
    (req.headers['x-forwarded-for'] &&
      req.headers['x-forwarded-for'].split(',').pop()) ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);

  const agent = useragent.parse(req.headers['user-agent']);

  const negotiator = new Negotiator(req);

  console.log(remoteAddress); // Incoming IP
  console.log(agent.os.toString()); // OS
  console.log(negotiator.languages()); // OS

  res.end('Welcome to Micro');
};
