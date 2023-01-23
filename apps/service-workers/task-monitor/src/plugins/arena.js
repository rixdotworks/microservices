const Arena = require('bull-arena');
const Bee = require('bee-queue');
const { sharedConfig } = require('use-queue');

const queues = []

const addQueue = (queueName) => {
  queues.push(Object.assign(sharedConfig || {}, {type: 'bee', name: queueName}))
}

addQueue('pdfQueue')
addQueue('dummyQueue')
addQueue('helloQueue')

module.exports = Arena({ Bee, queues })