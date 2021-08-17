import express from 'express'
import { readFileService } from '../controllers/readFile.controller'

const readFileRouter = express.Router()

readFileRouter.get('/', readFileService.readFile)

export default readFileRouter
