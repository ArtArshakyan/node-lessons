const http = require('http')
const cluster = require('cluster')

const port = 3000

if (cluster.isMaster) {

    // Fork workers
    for (let i = 1; i <= 2; i++) { // for 2 processor
        cluster.fork()
    }
    
} else {
    console.log(factorial(50))

    http.createServer((req, res) => {
        res.writeHead(200)
        res.end(`Current process ${process.pid}`)
    }).listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

function factorial(n) {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}
