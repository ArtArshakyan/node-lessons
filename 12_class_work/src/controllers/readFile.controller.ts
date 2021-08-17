import { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import path from 'path'

class ReadFileController {
    readFile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const filrName = path.resolve(__dirname, '../', 'files', 'text.txt')

            const readStream = await fs.createReadStream(filrName)

            readStream.on('open', () => {
                readStream.pipe(res)
            })

            readStream.on('error', (err) => {
                res.end(err)
            })
        } catch (err) {
            next(err)
        }
    }
}

export const readFileService = new ReadFileController()
