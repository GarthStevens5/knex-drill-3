
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', (games) => {
    games.increments()
    games.text('name')
    games.text('developer')
    games.float('rating')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
}
