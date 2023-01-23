const { useQueue } = require("use-service");

module.exports = (server) => {
    server.get("/create-pdf", (req, res) => {
        useQueue("createPDF")
          .createJob({})
          .save()
          .then((job) => {
            res.send(`Job created: ${job.id}`);
          })
          .catch((err) => {
            res.send(`Error: ${String(err)}`);
          });
      });
}