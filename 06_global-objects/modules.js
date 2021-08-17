const os = require('os')
const { userName, sayHi } = require('./test')

const name = 'Art'

console.log(os.platform(), os.release())

console.log(sayHi(name))
