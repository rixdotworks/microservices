const { useWorkerQueue } = require('use-queue')

const processQueue = (queueName, handlerFunction) => {
    const workerQueue = useWorkerQueue(queueName)

    console.log(`Starting queue worker for queue "${queueName}"`)
    
    const worker = workerQueue.process((job, done) => {
        console.log(`Handling job ${job.id} of queue "${queueName}"`)

        return handlerFunction(job, done)
    })

    console.log(`Queue worker for queue "${queueName}" started!`)
    

    return { queueName, handlerFunction, worker, workerQueue }
}

module.exports = { useWorkerQueue, processQueue }