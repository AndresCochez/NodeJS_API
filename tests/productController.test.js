const { getProducts } = require('../controllers/productController');

describe('Product Controller', () => {
  test('should return a list of products', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    getProducts(req, res);
    expect(res.json).toHaveBeenCalledWith([
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Mouse', price: 25 }
    ]);
  });
});