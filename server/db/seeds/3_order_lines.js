
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('order_lines').del()
    .then(() => {
      // Inserts seed entries
      return knex('order_lines').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ])
    })
}

