module.exports = (program) => {
    const createService = program.command('create').argument('workerName').description('Create a new service worker')
    
    createService.action((workerName) => {
        console.log(`--> creating service worker: ${workerName}`)
    })

    return createService
}