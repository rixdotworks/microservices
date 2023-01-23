module.exports = (program) => {
    const cmd = program.command('services')

    require('./list')(cmd)
    require('./create')(cmd)

    return cmd
}