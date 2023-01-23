const express = require('express');
const { executeOnQueue } = require('use-service');

const router = express.Router();

router.get('/', (req, res) => {
    return res.send(`This is the PDF endpoint`)
})

router.get('/create-pdf', async (req, res) => {
    const result = await executeOnQueue('pdfQueue', req.query || {})

    return res.json(result)
})

module.exports = router