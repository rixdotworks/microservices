const { processQueue } = require("use-worker");

processQueue('pdfQueue', (job, done) => {
    console.log(`Processing pdf job ${job.id}`)

    return done(null, { pdf: (job.data.name || 'untitled') + '-' + new Date().getTime() + ".pdf"})
})