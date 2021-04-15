const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const results = [];

fs.createReadStream(path.join(__dirname, 'sample_products.csv'))
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const products = results.filter(p => {
      return p.Type == 'simple'
    }).map(p => {
      let id = Number(Object.values(p)[0])
        return {
          title: p.Name, 
          description: p.Description,
          image: p.Images,
        }
    })

    fs.writeFile(path.join(__dirname, 'products.json'), JSON.stringify(products, null, 4), () => { //null, 4 will indent ewvery level by 4 spaces
console.log('all done')  
    })  

    //console.log(products);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  })




exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, title: 'Product 1', description: '', image: ''},
        {id: 2, title: 'Product 2', description: '', image: ''},
        {id: 3, title: 'Product 3', description: '', image: ''}
      ])
    })
}
