
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'product 1', description: '', image ''},
        {id: 2, title: 'product 2', description: '', image ''},
        {id: 3, title: 'product 3', description: '', image ''}
      ])
    })
}
