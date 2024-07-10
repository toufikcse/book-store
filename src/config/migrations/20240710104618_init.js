exports.up = function (knex) {
  return knex.schema.createTable('authors', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('bio');
    table.date('birthdate').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('authors');
};
