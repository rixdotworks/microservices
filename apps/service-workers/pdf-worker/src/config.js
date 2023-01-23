const {
    PDF_WORKER_PORT: PORT,
    PDF_WORKER_HOST: HOST
} = process.env

const port = PORT > 0 ? parseInt(PORT) : 5003
const host = `${HOST || '0.0.0.0'}`

module.exports = { port, host }