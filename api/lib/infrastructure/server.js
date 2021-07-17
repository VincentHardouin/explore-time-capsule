const environment = require('../../config/environment');
const { logger, port, host } = environment.server;

const server = require('./app')({ logger, path: environment.timeCapsule.path });

module.exports = {
  server,

  async start() {
    try {
      await server.listen(port, host);

      // https://www.fastify.io/docs/latest/Server/#printroutes
      server.ready(() => {
        console.log(server.printRoutes());
      });
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  },
};
