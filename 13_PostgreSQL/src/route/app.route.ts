import express, { Request, Response, NextFunction } from 'express'

const appRouter = express.Router()

appRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('Welcome to PostgreSQL')
    } catch (err) {
        next(err)
    }
})

export default appRouter