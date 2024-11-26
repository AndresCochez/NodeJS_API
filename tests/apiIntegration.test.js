const request = require('supertest');
const app = require('../app');

describe('API Integration Tests', () => {
  test('GET /api/data returns correct response', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'API Data' });
  });
});