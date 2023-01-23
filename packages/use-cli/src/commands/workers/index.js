module.exports = (program) => {
    const cmd = program.command('workers')

    require('./list')(cmd)
    require('./create')(cmd)

    return cmd
}