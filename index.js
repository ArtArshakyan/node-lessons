const http = require('http')
const { EventEmitter } = require('events')
const argv = require('minimist')(process.argv.slice(2))

console.log('argv', argv)

const logger = new EventEmitter()

const users = []
const msgs = []

logger.on('login', (name) => {
    users.push(name)
    argv.addUser && users.push(argv.addUser)
})

logger.on('message', (msg) => {
    msgs.push(msg)
    argv.message && msgs.push(argv.message)
})

logger.on('getUser', () => {
    console.log(`Logged Users :\n${users.join('\n')}`)
})

logger.on('getMessage', () => {
    console.log(`Messages :\n${msgs.join('\n')}`)
})

logger.emit('login', 'John')
logger.emit('message', 'Hello World')
logger.emit('getUser')
logger.emit('getMessage')

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node JS</h1>')
    res.end()
})

server.listen(3000, () => {
    console.log('Server is running...')
})
