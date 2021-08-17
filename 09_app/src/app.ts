import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import compression from 'compression'

dotenv.config()

export const PORT = process.env.PORT || 4000

export const getApp = (): Express => {
    const app = express()

    app.disable('x-powered-by')
    app.use(express.json())
    app.use(compression())

    app.use(cors())

    app.get('/ping', (req: Request, res: Response) => {
        res.send('pong')
    })

    app.post('/user/:id', (req: Request, res: Response) => {
        res.send(req.body)
    })

    return app
}
