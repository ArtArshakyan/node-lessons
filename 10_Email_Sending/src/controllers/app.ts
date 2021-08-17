import nodemailer from 'nodemailer'

const mailOptions = {
    from: process.env.USER_EMAIL,
    to: process.env.MAIL_TO,
    subject: 'Email from Node App: A test message',
    text: 'Hello from Node',
}

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS,
    },
})

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`Email send ${info.response}`)
    }
})