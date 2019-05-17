const request = require('supertest');
//const server = require('./server');
const db = require('../data/dbConfig');

describe(`get('/')`, () => {
  it('returns a 200 status code', async () => {
    let response = await request(server).get('/');
    expect(res.status).toBe(200);
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
