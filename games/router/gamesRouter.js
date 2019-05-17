const express = require('express');
const router = express.Router();
const Games = require('../model/gamesModel');

router.get('/', async (request, response) => {
  try{
    const games = await Games.getAll()
    response
      .status(200)
      .json(games)
  }
  catch(error) {
      response
        .status(500)
        .json(error)
    };
})

module.exports = router;
