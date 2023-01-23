#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const { createCommand } = require('commmander')

const program = createCommand()

const services = program.command('services')

const listServices = services.command('list').description('List all service workers')
const createService = services.command('create').argument('workerName').description('Create a new service worker')

listServices.action(() => {
   const items = fs.readdirSync(path.join(__dirname, '..', 'apps', 'service-workers'))
   
   for (const item of items) {
      console.log(`--> found service worker "${path.parse(item).name}"`)
   }
})

createService.action((workerName) => {
   console.log(`--> creating service worker: ${workerName}`)
})

const workers = program.command('workers')	

const listWorkers = workers.command('list').description('List all queue workers')
const createWorker = workers.command('create').argument('workerName').description('Create a new queue worker')

listWorkers.action(() => {
   const items = fs.readdirSync(path.join(__dirname, '..', 'apps', 'service-workers'))

   for (const item of items) {
      console.log(`--> found queue worker "${path.parse(item).name}"`)
   }
})

createWorker.action((workerName) => {
   console.log(`--> creating queue worker: ${workerName}`)
})


program.parse(process.argv)
