import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(express.static('public'))

app.use(express.json())

app.get('/', (req, res) => {
    req.redirect('index.html')
})

app.get('/hello', (req, res) => {
    res.send('Hello!!!')
})

app.get('/bye', (req, res) => {
    res.send({
        name: 'Artur',
    })
})

app.post('/hi', (req, res) => {
    console.log(req.body.name)
    res.send('Ameninch lav e')
})

app.listen(9001)
