const fs = require('fs')
const path = require('path')
const extract = require('extract-zip')

async function main() {
    try {
        await extract('chalk.zip', { dir: path.join(__dirname) })
        console.log('Extraction complete')

        let pathParams = process.argv[2] //Get the path parameter, the third parameter in the cmd command

        if (!pathParams) {
            pathParams = 'chalk'
        }

        //Turn to an absolute path
        pathParams = path.resolve(pathParams)

        //Level identification
        let index = 0

        function dirTree(pathParams) {
            //Deep search

            if (!fs.statSync(pathParams).isFile()) {
                //Whether it is a file
                console.log(markTree(index), getName(pathParams))

                let dirLis = fs.readdirSync(pathParams)

                index++ //Enter the next level

                for (let i = 0; i < dirLis.length; i++) {
                    dirTree(path.join(pathParams, dirLis[i]))
                }

                index-- //Back to previous
            } else {
                console.log(markTree(index), getName(pathParams))
            }
        }

        //Generate proportional file breaks
        function markTree(index) {
            if (index === 0) {
                return ''
            }
            let str = ''
            for (let i = 0; i < index; i++) {
                str += ' |__'
            }
            return str
        }

        //Return the directory name, or file name
        function getName(pathParams) {
            return path.parse(pathParams).base
        }

        //Specify the generated directory tree
        dirTree(pathParams)
    } catch (err) {
        console.log(err)
    }
}

main()
