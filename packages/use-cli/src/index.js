const { createCommand } = require('commander')

const program = createCommand()

require('./commands/services')(program)
require('./commands/workers')(program)

const parseArgs = (args, options) => program.parse(args || process.argv, options)

module.exports = { parseArgs }
