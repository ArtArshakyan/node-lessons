const fs = require('fs')
const path = require('path')
const { createGzip } = require('zlib')

function createFolder(cb) {
    const newFolder = path.join(__dirname, 'new-folder')

    fs.mkdir(newFolder, (err) => {
        if (err) {
            return console.log(err)
        }

        console.log('Folder created successfully!!!')

        cb(newFolder)
    })
}

async function zipFiles(newFolder) {
    try {
        const myFolder = path.join(__dirname, 'test-folder')
        const folderItems = await fs.readdirSync(myFolder)

        folderItems.map((item) => {
            const readFile = fs.createReadStream(`${myFolder}/${item}`)
            const writeFile = fs.createWriteStream(`${newFolder}/${item}.gz`)

            return readFile.pipe(createGzip()).pipe(writeFile).on('finish', (err) => {
                if(err) {
                    return console.log(err)
                }
            })
        })

        console.log('Files zipped successfully!!!')
    } catch (err) {
        console.log(err)
    }
}

createFolder(zipFiles)