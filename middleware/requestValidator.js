function validateRequest(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Request body is missing' });
  }
  next();
}

module.exports = validateRequest;