const {
    TASK_RUNNER_PORT: PORT,
    TASK_RUNNER_HOST: HOST
} = process.env

const port = PORT > 0 ? parseInt(PORT) : 5004
const host = `${HOST || '0.0.0.0'}`

module.exports = { port, host }