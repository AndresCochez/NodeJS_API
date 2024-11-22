const { getUsers } = require('../controllers/userController');

describe('User Controller', () => {
  test('should return a list of users', () => {
    const req = {};
    const res = {
      json: jest.fn()
    };

    getUsers(req, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }]);
  });
});