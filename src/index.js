'use strict'

const seneca = require('seneca')()

seneca
  .add('cmd:email', function(msg, respond) {

    require('./service')({
      to: msg.args.to, // 'xiekun@f3dt.com',
      subject: msg.args.subject, // 'welcome',
      html: msg.args.html //'<h1>welcome!!</h1>'
    }).then((result) => {
      if (msg.args.callback) {
        seneca.act(msg.args.callback)
      }
    }).catch(console.error)

    respond(null, {
      msg: 'email sent'
    })
  })
  .listen({
    pin: 'cmd:email'
  })

module.exports = {
  seneca
}