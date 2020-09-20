'use strict'

const seneca = require('seneca')()
const senecaWeb = require('seneca-web')
const Express = require('express')
const Router = Express.Router
const context = new Router()

const senecaWebConfig = {
  context: context,
  adapter: require('seneca-web-adapter-express'),
  options: {
    parseBody: false
  }
}
Express()
  .use(require('body-parser').json())
  .use(context)
  .listen(require('./config.json').http_port)

seneca
  .use(senecaWeb, senecaWebConfig)
  .use('./src/web')
  .client({
    pin: 'cmd:email'
  })