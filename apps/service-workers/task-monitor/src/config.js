const {
    TASK_MONITOR_PORT: PORT,
    TASK_MONITOR_HOST: HOST
} = process.env

const port = PORT > 0 ? parseInt(PORT) : 5006
const host = `${HOST || '0.0.0.0'}`

module.exports = { port, host }