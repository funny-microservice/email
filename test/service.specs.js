const { seneca } = require('../src/index.js')
const assert = require('assert')

describe('Email service', function () {
    this.beforeAll(function () {
        seneca
            .add('cmd:email-callback', function (msg, respond) {
                console.log(111111)
                respond(null, {})
            })
            .listen({
                pin: 'cmd:email-callback'
            })
    })
    this.afterAll(function () {
        seneca.close()
    })
    describe('given a mail call ', function () {
        it('when send successfully should call email-callback', function () {
            seneca.act('cmd:email,callback:email-callback,to:xiekun@f3dt.com,subject:test,html:<h1>test email</h1>', function (err, result) {
                assert.notDeepStrictEqual(result, {
                    msg: 'email sent'
                })
            })
        })
    })
})