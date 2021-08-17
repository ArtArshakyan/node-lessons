import express from 'express'
import { writeFileService } from '../controllers/writeFile.controller'

const writeFileRouter = express.Router()

writeFileRouter.get('/', writeFileService.writeFile)

export default writeFileRouter
