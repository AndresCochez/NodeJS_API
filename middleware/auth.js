function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  // Simulate token verification
  if (token !== 'valid-token') {
    return res.status(403).send({ error: 'Invalid token' });
  }
  next();
}

module.exports = authenticate;