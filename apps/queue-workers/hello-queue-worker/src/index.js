const { processQueue } = require("use-worker");

processQueue('helloQueue', (job, done) => {
    console.log(`Processing hello job ${job.id}`)

    return done(null, `Hello, ${job.data.name || 'guest'}`)
})