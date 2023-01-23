const express = require('express');
const { executeOnQueue, publishOnQueue, checkHealthOnQueue, checkJobOnQueue } = require('use-service');

const router = express.Router();

router.get('/', (req, res) => {
    return res.send(`This is the task runner endpoint`)
})

router.get('/execute/:queueName', async (req, res) => {
    const result = await executeOnQueue(req.params.queueName, req.query || {})

    return res.json(result)
})

router.get('/publish/:queueName', async (req, res) => {
    const result = await publishOnQueue(req.params.queueName, req.query || {})

    const { id, progress, data, options, status } = result

    return res.json({ id, progress, data, options, status })
})

router.get('/status/:queueName/:jobId', async (req, res) => {
    const { queueName, jobId } = req.params || {}

    const result = await checkJobOnQueue(queueName, jobId)

    const { id, progress, data, options, status } = result

    return res.json({ id, progress, data, options, status })

    return res.json({ queueName, id, status })
})

router.get('/:queueName', async (req, res) => {
    const health = await checkHealthOnQueue(req.params.queueName)

    const tasks = []

    const result = {
        queueName: req.params.queueName,
        tasks,
        health,
    }

    return res.json(result)
})

module.exports = router