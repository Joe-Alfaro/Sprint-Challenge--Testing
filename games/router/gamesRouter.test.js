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
    };
  });
});

describe(`post ('/api/games/')`, () => {
  it('returns a 201 when given correct inputs', async () => {
    const newGame = {
      title: 'StarCraft',
      genre: 'Strategy',
      releaseYear: 1998
    };
    let response = await request(server).post('/api/games').send(newGame);
    expect(response.status).toBe(201);

    newGame = {
      title: 'Madden',
      genre: 'Sports'
    };
    response = await request(server).post('/api/games').send(newGame);
    expect(response.status).toBe(201);
  });
  it('returns the added object when successful', async () => {
    const newGame = {
      title: 'NBA 2k',
      genre: 'Sports'
    };
    const response = await request(server).post('/api/games').send(newGame);
    expect(newGame.title).toBe(response.title)
    expect(newGame.genre).toBe(response.genre)
  });
  it('returns a 422 status when given wrong inputs', async () => {
    const response = await request(server).post('/api/games').send({});
    expect(response.status).toBe(422);
  });
});
