const { useQueue } = require('use-queue')

const listenOnQueue = (queueName, eventName, callbackFunction) => {
    console.log(`Attaching queue listener for "${eventName}" on queue "${queueName}"`)

    return useQueue(queueName).on(eventName, callbackFunction) 
}

const createOnQueue = (queueName, arguments) => {
    console.log(`Creating job on queue "${queueName}"`, arguments)

    return useQueue(queueName).createJob(arguments)
}

const publishOnQueue = (queueName, arguments) => {
    console.log(`Publishing job on queue "${queueName}"`, arguments)

    return createOnQueue(queueName, arguments).save()
}

const executeOnQueue = async (queueName, arguments) => {
    console.log(`Executing job on queue "${queueName}"`, arguments)

    return await new Promise((resolve, reject) => {
        const job = createOnQueue(queueName, arguments)

        console.log(`Created job ${job.id} on queue "${queueName}" for execution`)

        job.save() 

        job.on('succeeded', (result) => {
            console.log(`Job ${job.id} succeeded on queue "${queueName}"`, {result})

            return resolve(result)
        })

        job.on('failed', (error) => {
            console.log(`Job ${job.id} failed on queue "${queueName}"`, {error})

            return reject(error)
        })
    })
}

const checkHealthOnQueue = async (queueName) => await useQueue(queueName).checkHealth()

const checkJobOnQueue = async (queueName, jobId) => {
    return await useQueue(queueName).getJob(jobId)
}

module.exports = { useQueue, executeOnQueue, listenOnQueue, publishOnQueue, checkHealthOnQueue, checkJobOnQueue }