const redis = require('redis')

const redisOpts = {
    socket: {
        host: process.env.BQ_REDIS_HOST || '0.0.0.0',
        port: process.env.BQ_REDIS_PORT || 6379,
    },
    user: process.env.BQ_REDIS_USER || undefined,
    password: process.env.BQ_REDIS_PASSWORD || undefined
}

const createRedisClient = (opts) => redis.createClient(opts)

let redisClient = null;

const useRedisClient = () => {
    if (redisClient === null) {
        console.dir(redisOpts)
        redisClient = createRedisClient(redisOpts)
    }

    return redisClient
}

module.exports = { createRedisClient, useRedisClient }