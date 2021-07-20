const http = require('http')
const cluster = require('cluster')

const port = 3000

function factorial(n) {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}

if (cluster.isMaster) {

    let sum = 0;
    for (let i = 0; i < 2; i++) {
        const worker = cluster.fork()

        worker.on('message', (msg) => {
            console.log('Master ' + process.pid + ' received message from worker ',msg)

            sum += msg

            console.log('sum', sum)
        })
    }



} else {
    console.log('Worker ' + process.pid + ' has started.')

    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Current process ${process.pid}`)
        process.send(factorial(25))
    }).listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}
