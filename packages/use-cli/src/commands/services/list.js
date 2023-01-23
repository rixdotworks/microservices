const fs = require('fs')
const path = require('path')

module.exports = (program) => {
    const listCmd = program.command('list').description('List all service workers')
    
    listCmd.action(() => {
        const items = fs.readdirSync(path.join(process.cwd(), 'apps', 'service-workers'))
        
        for (const item of items) {
            console.log(`--> found service worker "${path.parse(item).name}"`)
        }
    })

    return listCmd
}