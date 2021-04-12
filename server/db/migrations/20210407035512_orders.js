
exports.up = (knex) => {
    return knex.schema.createTable('orders', table => {
        table.increments('id').primary()
        table.string('title') 
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('orders')
  }
  
