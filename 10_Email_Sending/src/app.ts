import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import cron from 'node-cron'

dotenv.config()

const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'Email from Node App: A test message',
    text: 'Hello from Node',
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
})

cron.schedule('* * * * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`Email send ${info.response}`)
        }
    })
})
