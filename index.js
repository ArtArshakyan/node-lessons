const fs = require('fs')

try {
    const csv = fs.readFileSync('addresses.csv')
    const array = csv.toString().trim().split('\n')

    const result = []
    const headers = array[0].split(',')

    for (let i = 1; i < array.length; i++) {
        const obj = {}
        const str = array[i]

        let newStr = ''
        let flag = 0

        for (let char of str) {
            if (char === '"' && flag === 0) {
                flag = 1
            } else if (char === '"' && flag == 1) {
                flag = 0
            }

            if (char === ',' && flag === 0) {
                char = '|'
            }

            if (char !== '"') {
                newStr += char
            }
        }

        let properties = newStr.split('|')

        for (let j in headers) {
            if (properties[j].includes(',')) {
                obj[headers[j]] = properties[j]
                    .split(',')
                    .map((item) => item.trim())
            } else {
                obj[headers[j]] = properties[j]
            }
        }

        result.push(obj)
    }

    const json = JSON.stringify(result)
    fs.writeFileSync('addresses.json', json)
} catch (err) {
    console.log(err)
}
