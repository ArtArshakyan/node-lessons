import fs from 'fs'
import path from 'path'

class WriteService {
    write = async () => {
        const fileName = path.resolve(__dirname, '../', 'files', 'text.txt')
        const newFile = path.resolve(__dirname, '../', 'files', 'text.json')

        const readFile = await fs.createReadStream(fileName)

        readFile.setEncoding('utf-8')

        let outData = ''

        readFile.on('data', (data) => {
            outData += data
        })

        readFile.on('end', () => {
            const arrayWithData = outData.split('\n')
            const obj: any = {}
            const result = {}

            for (let i = 0; i < arrayWithData.length; i++) {
                const array = arrayWithData[i].split('=')
                obj[array[0]] = array[1]
            }

            // For each object path (property key) in the object
            for (const objectPath in obj) {
                // Split path into component parts
                const parts = objectPath.split('.')

                // Create sub-objects along path as needed
                let target: any = result

                while (parts.length > 1) {
                    const part: any = parts.shift()
                    target = target[part] = target[part] || {}
                }

                // Set value at end of path
                target[parts[0]] = obj[objectPath]
            }

            console.log(result)

            fs.writeFileSync(newFile, JSON.stringify(result, null, ' '))
        })
    }
}

export const writeServices = new WriteService()
