import http from 'http'
import fs from 'fs'
import path from 'path'

const mimeType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/vjavascript',
}

function fileMiddleware(req, res, next) {
    let url = req.url
    if (url === '/') {
        url = '/index.html'
    } else if (url === '/contact') {
        url = '/contact.html'
    }

    const filePath = path.resolve('public' + url)

    fs.promises
        .access(filePath)
        .then(() => {
            const ext = path.extname(filePath)
            res.writeHead(200, { 'Content-Type': mimeType[ext] })
            fs.createReadStream(filePath).pipe(res)
        })
        .catch(() => {
            next()
        })
}

const server = http.createServer((req, res) => {
    fileMiddleware(req, res, () => {
        if (req.url === '/hello') {
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Hello')
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.end('Bye')
        }
    })
})

server.listen(8000)
