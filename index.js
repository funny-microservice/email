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
const app = Express()
  .use(require('body-parser').json())
  .use(context)
  .listen(5000)

seneca
  .use(senecaWeb, senecaWebConfig)
  .use('api')
  .client({
    pin: 'cmd:email'
  })