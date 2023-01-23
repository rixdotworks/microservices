const fs = require('fs')
const path = require('path')

module.exports = (program) => {
    const listCmd = program.command('list').description('List all queue workers')
    
    listCmd.action(() => {
        const items = fs.readdirSync(path.join(process.cwd(), 'apps', 'queue-workers'))
        
        for (const item of items) {
            console.log(`--> found queue worker "${path.parse(item).name}"`)
        }
    })

    return listCmd
}