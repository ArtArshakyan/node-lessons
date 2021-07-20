const cluster = require('cluster')

if (cluster.isMaster) {

    // Fork workers.
    for (let i = 1; i <= 2; i++) { // for 2 processor
        cluster.fork()
    }
    
} else {
    console.log(factorial(50))
    process.exit(0)
}

function factorial(n) {
    if (n <= 1) {
        return 1
    }

    return n * factorial(n - 1)
}
