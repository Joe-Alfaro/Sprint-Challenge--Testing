const request = require('supertest');
const server = require('./server');

describe(`get('/')`, () => {
  it('returns a 200 status code', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
  });

  it('returns JSON data', async () => {
    const response = await request(server).get('/');
    expect(response.type).toBe('application/json');
  });

  it(`returns 'Server Home' in the response body message`, async () => {
    const response = await request(server).get('/');
    expect(response.body.message).toBe('Server Home');
  })
})
