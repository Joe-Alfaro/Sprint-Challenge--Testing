const db = require('../../data/dbConfig.js');
const Games = require('./gamesModel.js');

describe('games model', () => {
  afterEach(async () => {
    await db('games').truncate();
  })
  describe('add()', () => {
    it('should add game to database', async () => {
      let beforeAdd = await db('games');
      beforeAdd = beforeAdd.length;
      
      Games.add({
        title: `Madden '19`,
        genre: 'Sports'
      });
      
      let afterAdd = await db('games');
      afterAdd = afterAdd.length;

      expect(afterAdd).toBe(beforeAdd+1)
    })
  });
})
