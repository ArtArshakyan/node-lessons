const fs = require('fs')
const path = require('path')
const extract = require('extract-zip')
const tree = require('tree-node-cli')

async function main() {
    try {
        await extract('chalk.zip', { dir: path.join(__dirname) })
        console.log('Extraction complete')

        const string = tree('chalk', {
            allFiles: true,
        })

        console.log(string)
    } catch (err) {
        console.log(err)
    }
}
main()

/** Custom implementation */

// let deep = 0
// async function main() {
//     try {
//         await extract('chalk.zip', { dir: path.join(__dirname) })
//         console.log('Extraction complete')

//         function deepTree(pathName) {
//             if (!fs.statSync(pathName).isFile()) {
//                 console.log(markTree(deep), getName(pathName))

//                 let dirList = fs.readdirSync(pathName)

//                 deep++

//                 for (let i = 0; i < dirList.length; i++) {
//                     deepTree(path.join(pathName, dirList[i]))
//                 }

//                 deep--
//             } else {
//                 console.log(markTree(deep), getName(pathName))
//             }
//         }

//         deepTree('chalk')
//     } catch (err) {
//         console.log(err)
//     }
// }

// function markTree(deep) {
//     if (deep === 0) {
//         return ''
//     }
//     let str = ''
//     for (let i = 0; i < deep; i++) {
//         str += '|__'
//     }
//     return str
// }

// function getName(pathName) {
//     return path.parse(pathName).base
// }

// main()
