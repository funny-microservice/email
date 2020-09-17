'use strict'

const seneca = require('seneca')()

seneca
  .add('cmd:email', function(msg, respond) {
    console.log(msg.args)
    require('./email_service')({
      to: 'xiekun@f3dt.com',
      subject: 'welcome',
      html: '<h1>welcome!!</h1>'
    })
      .then((result) => {
        respond(null, {
          msg: result
        })
      })
      .catch(respond)
  })
  .listen({
    pin: 'cmd:email'
  })