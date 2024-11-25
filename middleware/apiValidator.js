function validateApiRequest(req, res, next) {
  if (!req.headers['x-api-key']) {
    return res.status(403).send({ error: 'API key is required' });
  }
  next();
}

module.exports = validateApiRequest;