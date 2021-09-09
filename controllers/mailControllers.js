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
            html: `<div style="background-color: #292657; min-height: 55vh; width: 60vw; display: flex; flex-direction: column; align-items: center;">
            <h1 style="color: white; font-family: 'Fredoka One', cursive; color: #88f0c0; font-weight: 900;">WELCOME TO NOSY! ${username}</h1>
            <p style="color: white; font-family: 'Ubuntu', sans-serif; ">Now, you can play, collect coins and more! Invite your friends!</p>
            <div><img style="width: 180px;" src="https://cdn.discordapp.com/attachments/883719217290018827/885242238584627261/favicon.png" altName="logoMail"/></div>
            <a style="color: white; font-family: 'Ubuntu', sans-serif; " href="https://benosy.herokuapp.com/">Play now!</a>
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