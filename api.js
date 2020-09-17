module.exports = function api(options) {
  this.add('init:api', function(msg, respond) {
    this.act('role:web', {
      routes: {
        prefix: '/v1',
        pin: 'cmd:email',
        map: {
          email: {
            GET: true
          }
        }
      }
    }, respond)
  })
}