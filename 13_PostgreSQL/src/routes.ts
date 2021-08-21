import express from 'express'
import appRouter from './route/app.route'

const routes = express.Router()

routes.use('/', appRouter)

export default routes
