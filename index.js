const http = require('http')
const { EventEmitter } = require('events')

const logger = new EventEmitter()

const users = []
const msgs = []

logger.on('message', (msg) => {
    console.log(`New Message ${msg}`)
    msgs.push(msg)
})

logger.on('login', (name) => {
    console.log(`New User ${name}`)
    users.push('name')
})

logger.on('getUser', () => {
    console.log(`Logged Users\n${users.join('\n')}`)
})

logger.on('getMessage', () => {
    console.log(`Messages\n${msgs.join('\n')}`)
})

logger.emit('message', 'Hello World')
logger.emit('login', 'Artur')
logger.emit('login', 'Arshakyan')
logger.emit('getUser', users)
logger.emit('getMessage', msgs)

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node JS</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Server is running...')
})
