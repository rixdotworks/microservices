module.exports = (program) => {
    const createCmd = program.command('create').argument('name').description('Create a new service worker')
    
    createCmd.action((name) => {
        console.log(`--> creating service worker: ${name}`)
    })

    return createCmd
}