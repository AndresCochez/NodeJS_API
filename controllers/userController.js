const User = require('../models/User');

const getUsers = (req, res) => {
  res.json([{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }]);
};

module.exports = { getUsers };