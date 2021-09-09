const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
    },
    tls: { rejectUnauthorized: false }
})

const mailControllers = {
    sendMail: (req, res) => {
        const {email, username} = req.body
        let options = {
            from: 'Nosy <nosygame2021@gmail.com>',
            to: email, 
            subject: `Welcome to Nosy ${username}!`,
            html: 
            `<div>
                <h1>Welcome to Nosy!</h1>
                <h3>Thank you for creating your account. Your username is ${username}</h3>
            </div>`
        }
        transport.sendMail(options, (err, info) => {
            if (err) {
                return res.json({success: false, response: err})
            }
            return res.json({success: true, response: info})
        })
    }
}

module.exports = mailControllers