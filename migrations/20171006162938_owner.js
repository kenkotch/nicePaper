exports.up = (knex, Promise) => {
  return knex.schema.createTable('owner', (table) => {
    table.increments()

    table.varchar('username', 63)
      .notNullable()
      .defaultTo('')

    table.specificType('hashed_password', 'CHAR(60)')
      .notNullable()

    table.varchar('email', 63)
      .notNullable()
      .defaultTo('')

    table.varchar('names')
      .notNullable()
      .defaultTo('')

    table.integer('template_id')
      .references('id')
      .inTable('template')
      .onDelete('CASCADE')
      .notNullable()

    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('owner')
}