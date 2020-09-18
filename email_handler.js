'use strict'

const seneca = require('seneca')()

seneca
  .add('cmd:email', function(msg, respond) {
    require('./email_service')({
      to: 'xiekun@f3dt.com',
      subject: 'welcome',
      html: '<h1>welcome!!</h1>'
    }).catch(console.error)

    respond(null, {
      msg: 'email sent'
    })
  })
  .listen({
    pin: 'cmd:email'
  })