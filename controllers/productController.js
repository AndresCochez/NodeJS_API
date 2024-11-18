const Product = require('../models/Product');

const getProducts = (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 25 }
  ]);
};

module.exports = { getProducts };