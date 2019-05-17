exports.up = (knex, Promise) => ( 
  knex.schema
    .createTable('games', table => {
      table.increments();
      table.string('title', 255)
        .notNullable()
        .unique();
      table.string('genre', 255)
        .notNullable();
      table.integer('releaseYear');
      table.timestamps(true, true);
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('games')
);
