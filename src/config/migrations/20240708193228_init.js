exports.up = function (knex) {
  return knex.schema
    .createTable('authors', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.text('bio');
      table.date('birthdate').notNullable();
      table.timestamps(true, true);
    })
    .then(() => {
      return knex.schema.createTable('books', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description');
        table.date('published_date').notNullable();
        table.integer('author_id').unsigned().notNullable();
        table
          .foreign('author_id')
          .references('id')
          .inTable('authors')
          .onDelete('CASCADE');
        table.timestamps(true, true);
      });
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable('books').then(() => {
    return knex.schema.dropTable('authors');
  });
};
