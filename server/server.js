const express = require('express')
const server = express()
const path = require('path')

const productRoutes = require('./routes/products')

server.use(express.static(path.join(__dirname, 'public'))) //path .join says join this list of folders together, dir name is current directory then server then public. it will join those together into a string.
server.use(express.json()) // the middleware that will parse incoming json api requests, like a post to create data
// server.use(express.static('public)) // if public is in the project root

server.use('/api/products', productRoutes)
module.exports = server

