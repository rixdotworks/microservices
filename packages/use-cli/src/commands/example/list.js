const fs = require('fs')
const path = require('path')

module.exports = (program) => {
    const listServices = program.command('list').description('List all service workers')
    
    listServices.action(() => {
        const items = fs.readdirSync(path.join(__dirname, '..', '..', '..', 'apps', 'service-workers'))
        
        for (const item of items) {
            console.log(`--> found service worker "${path.parse(item).name}"`)
        }
    })

    return listServices
}