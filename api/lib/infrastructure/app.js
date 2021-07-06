function build(opts = {}) {
  // See https://nodejs.org/api/net.html#net_server_listen_options_callback
  const fastify = require('fastify')({
    ...opts,
  });

  // https://github.com/fastify/fastify-cors
  fastify.register(require('fastify-cors'), {
    origin: '*',
  });

  fastify.after(() => {
    fastify.register((instance, opts, done) => {
      fastify.register(require('./routes/files'));
      done();
    });
  });

  fastify.addHook('onError', async (request, reply, error) => {
    done();
  });

  return fastify;
}

module.exports = build;
