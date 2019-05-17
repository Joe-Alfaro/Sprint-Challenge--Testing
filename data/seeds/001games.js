exports.seed = (knex, Promise) => (
  knex('games').del()
  .then(() => (
      knex('games').insert([
        {
          title: 'Pacman', 
          genre: 'Arcade', 
          releaseYear: 1980
        },
        {
          title: 'World of Warcraft', 
          genre: 'MMORPG', 
          releaseYear: 2004 
        }
      ])
    )
  )
)
