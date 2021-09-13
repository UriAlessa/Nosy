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
        const { email, username } = req.body
        let options = {
            from: 'Nosy <nosygame2021@gmail.com>',
            to: email,
            subject: `Welcome to Nosy ${username}!`,
            html: `<a href='https://benosy.herokuapp.com/'><img style="width: 80%;" src='https://cdn.discordapp.com/attachments/883716109084287008/886835916960858112/Now_you_can_play_collect_coins_and_more_Invite_your_friends.png' alt='Welcome Mail'</a>`
        }
        transport.sendMail(options, (err, info) => {
            if (err) {
                return res.json({ success: false, response: err })
            }
            return res.json({ success: true, response: info })
        })
    }
}

module.exports = mailControllers