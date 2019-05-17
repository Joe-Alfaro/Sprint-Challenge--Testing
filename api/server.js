const express = require('express');
const server = express();
const gamesRouter = require('../games/router/gamesRouter');

server.use(express.json());

server.use('/api/games', gamesRouter);

server.get('/', (request, response) => {
  response
    .status(200)
    .json({ 
      message: 'Server Home'
    });
});

module.exports = server;
