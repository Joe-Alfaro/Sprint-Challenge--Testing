const db = require('../../data/dbConfig.js');
const Games = require('./gamesModels.js');

describe('games model', () => {
  describe('add()', () => {
    it('should add game to database', async () => {
      const result = await db('games').length+1;
      const newGame = {
        title: `Madden '19`,
        genre: 'Sports'
      }
      await Games.insert(newGame);

      expect(await db('games').length).toEqual(result)
    })
  });
})
