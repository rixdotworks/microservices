const express = require("express");
const { port, host } = require("./config");

const server = express();

server.get("/", (req, res) => {
  res.send(`Hello from the PDF factory`);
});

server.use('/api/pdf-documents', require('./controllers/pdf-documents'))

const startListening = () => {
  return new Promise((resolve, reject) => {
    server.listen(port, host, () => {
        console.log(`Server listening on http://${host}:${port}`)

        resolve(server);
    });

    server.on("error", (err) => {
      reject(err);
    });
  });
}

const start = async () => {
  return await startListening()
}
  

module.exports = { server, startListening, start }
