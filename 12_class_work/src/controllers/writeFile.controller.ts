import { Request, Response, NextFunction } from 'express'
import { writeServices } from '../services/writeFile.service'

class WriteFileController {
    writeFile = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await writeServices.write()
            res.send('Created JSON file')
        } catch (err) {
            next(err)
        }
    }
}

export const writeFileService = new WriteFileController()
