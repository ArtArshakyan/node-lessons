const fs = require('fs')
const path = require('path')
const zlib = require('zlib').createGzip()

const myFolder = path.join(__dirname, 'test-folder')
const newFolder = path.join(__dirname, 'new-folder')

fs.mkdir(newFolder, (err) => {
    if (err) {
        return console.log(err)
    }

    const folderItems = fs.readdirSync(myFolder)

    folderItems.map((item) => {
        const readFile = fs.createReadStream(`${myFolder}/${item}`)
        const writeFile = fs.createWriteStream(`${newFolder}/${item}.gz`)

        return readFile.pipe(zlib).pipe(writeFile).on('finish', (err) => {
            if(err) {
                return console.log(err)
            }
        })
    })
})