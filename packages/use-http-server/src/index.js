const express = require('express')

const DEFAULT_OPTIONS = {
    host: '0.0.0.0',
    port: 3000,
}

const useHttpServer = (plugins) => {
    const server = express()

    const install = (pluginName) => {
        return server.use(pluginName, plugins[pluginName])
    }

    Object.keys(plugins).forEach((pluginName) => install(pluginName))

    const startListening = (options) => {
        const { host, port } = Object.assign(DEFAULT_OPTIONS, options || {})

        return new Promise((resolve, reject) => {
            server.listen(port, host, () => {
                console.log(`Server listening on http://${host}:${port}`)
        
                return resolve(server);
            });
        
            server.on("error", (err) => {
              return reject(err);
            });
          });
    }

    const start = async (options) => {
        return await startListening(options)
      }

    return { server, plugins, install, start, startListening }
}

const startHttpServer = ({plugins, host, port}) => {
    const httpServer = useHttpServer(plugins || {})

    httpServer.start({ host, port })

    return httpServer
}

module.exports = { useHttpServer, startHttpServer }