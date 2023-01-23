const { startHttpServer } = require('use-http-server');

const { host, port } = require('./config')
const plugins = require('./plugins')

module.exports = startHttpServer({ plugins, host, port })