const { processQueue } = require("use-worker");

processQueue('dummyQueue', (job, done) => {
    console.log(`Processing dummy job ${job.id}`)

    return done(null, `This is just a dummy job. I do nothing special.`)
})