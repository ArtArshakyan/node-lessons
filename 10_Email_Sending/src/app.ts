import express from 'express'
import cron from 'node-cron'
import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT

export const getApp = () => {
    const app = express()

    return app
}

cron.schedule('* * * * * *', () => {
    
})

