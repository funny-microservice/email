
const nodemailer = require('nodemailer')
const secret = require('../config.json')

function restoreSecret(str) {
    return Buffer.from(str, 'base64').toString()
}

secret.pass = restoreSecret(secret.pass)
secret.user = restoreSecret(secret.user)
secret.host = restoreSecret(secret.host)

module.exports = async function send(options) {
    const transporter = nodemailer.createTransport({
        // host: 'smtp.outlook.com',
        host: secret.host,
        port: 587,
        secure: false,
        auth: {
            user: secret.user,
            pass: secret.pass
        }
    })
    const info = await transporter.sendMail({
        from: `${secret.user.split('@').shift()}<${secret.user}>`,
        to: options.to,
        subject: options.subject,
        // text: '',
        html: options.html
    })
    console.log(info)
    return info
}