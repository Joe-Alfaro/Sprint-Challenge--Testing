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
    }
})

router.post('/', async (request, response) => {
  try{
    const {genre, title} = request.body;
    
    if(title&&genre){
      const game = await Games.add(request.body);
      response
        .status(201)
        .json(game)
    }
    else{
      response
        .status(422)
        .json({errorMessage: 'Invalid information'})
    }
  }
  catch(error){
    response
      .status(500)
      .json(error)
  }
})

module.exports = router;
