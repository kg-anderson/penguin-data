exports.up = function (knex) {
  return knex.schema.createTable('penguins', (table) => {
    table.increments('id').primary()
    table.string('site_name')
    table.string('site_id')
    table.decimal('longitude_epsg_4326')
    table.float('latitude_epsg_4326')
    table.string('common_name')
    table.integer('day')
    table.integer('month')
    table.integer('year')
    table.integer('season_starting')
    table.integer('penguin_count')
    table.string('count_type')
    table.string('reference')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('penguins')
}
