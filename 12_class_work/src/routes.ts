import express from 'express'
import blogRoutes from './route/blog.route'
import readFileRouter from './route/readFile.route'
import writeFileRouter from './route/writeFile.route'

const routes = express.Router()

routes.use('/blog', blogRoutes)
routes.use('/read-file', readFileRouter)
routes.use('/write-file', writeFileRouter)

export default routes
