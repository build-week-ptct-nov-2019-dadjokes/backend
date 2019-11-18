exports.up = function(knex) {
  return knex.schema.createTable('jokes', tbl => {
    tbl.increments();
    tbl.string('joke', 500).notNullable();
    tbl.string('punchline', 500).notNullable();
    tbl
      .integer('created_by')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.boolean('private').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes');
};
