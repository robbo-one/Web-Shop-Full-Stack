const Knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE.ENV || 'development'
const connection = knex(config[env])

module.exports = connection 