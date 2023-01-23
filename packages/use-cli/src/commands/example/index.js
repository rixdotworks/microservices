module.exports = (program) => {
    const services = program.command('services')

    require('./list')(services)
    require('./create')(services)

    return services
}