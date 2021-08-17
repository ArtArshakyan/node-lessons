import express, { Express } from 'express'
import routes from './routes'

export const PORT = process.env.PORT || 3000

export const getApp = (): Express => {
    const app = express()

    app.use(express.json())
    app.use(routes)
    
    return app
}
