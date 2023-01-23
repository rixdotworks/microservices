const Queue = require('bee-queue')

const sharedConfig = {
    redis: process.env.BQ_REDIS_URL,
    isWorker: false,
}

const sharedWorkerConfig = Object.assign(sharedConfig, { isWorker: true })

let cachedQueues = {}

const useQueue = (name, isWorker) => {
    const key = `${isWorker === true ? 'worker_' : 'service_'}:${name}`

    if (!cachedQueues[key]) {
        cachedQueues[key] = new Queue(name, isWorker === true ? sharedWorkerConfig : sharedConfig)
    }

    return cachedQueues[key]
}

const useWorkerQueue = (name) => {
    return useQueue(name, true)
}

module.exports = { sharedConfig, sharedWorkerConfig, useQueue, useWorkerQueue }