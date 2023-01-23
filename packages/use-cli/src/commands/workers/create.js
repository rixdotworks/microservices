module.exports = (program) => {
    const createCmd = program.command('create').argument('name').description('Create a new queue worker')
    
    createCmd.action((name) => {
        console.log(`--> creating queue worker: ${name}`)
    })

    return createCmd
}