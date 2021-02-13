const path = require('path')
const express = require('express')

const penguins = require('./routes/penguins')
const sites = require('./routes/sites')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/penguins', penguins)
server.use('/api/v1/sites', sites)

module.exports = server
