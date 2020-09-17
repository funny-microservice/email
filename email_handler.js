const seneca = require('seneca')()

seneca
  .add('cmd:email', function(msg, respond) {
    console.log(msg.args)
    respond(null, {
      msg: 'success email'
    })
  })
  .listen({
    pin: 'cmd:email'
  })