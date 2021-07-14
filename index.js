const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Please write file name with extension ', (fileName) => {
    fs.writeFile(fileName, 'Hello node js', (err) => {
        if (err) console.err(err)

        fs.readFile(fileName, (err, data) => {
            if (err) console.err(err)

            console.log('File content: ', data.toString())
        })
    })
    rl.close()
})
