const path = require('path')
const logger = require('winston')
require('babel-polyfill')

const options = {
  basedir: __dirname,
  pkg: require(path.join(__dirname, 'package.json')),
  logger: logger,
  port: process.env['PORT'] || 8000,
  environment: process.env['NODE_ENV'] || 'development',
  postgresURI: process.env['POSTGRES_URI'] || 'postgres://postgres:postgres@localhost:5432/api_development',
  phoneNumber: process.env['PHONE_NUMBER'],
  accountId: process.env['ACCOUNT_ID'],
  authToken: process.env['AUTH_TOKEN'],
  serverURL: process.env['SERVER_URL']
}

const application = require(path.join(__dirname, 'build'))

application.start(options)
.then(server => {
  server.listen(options.port)
})
.catch(err => {
  logger.error(err)
})
