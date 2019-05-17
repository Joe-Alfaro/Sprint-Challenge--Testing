const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/dbConfig');

describe(`get('/api/games/')`, () => {
  it('return a 200 status code', async () => {
    const response = await request(server).get('/api/games');
    expect(response.status).toBe(200);
  });
  it('returns an array', async () => {
    const response = await request(server).get('/api/games');
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it('returns an array of objects', async () => {
    const response = await request(server).get('/api/games');
    for(let i = 0; i < response.length; i++){
      expect(typeof response[i]).toEqual('object');
    }
  })
});
