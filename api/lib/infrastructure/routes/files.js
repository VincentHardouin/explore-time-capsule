const useCases = require('../../application/use_cases');

module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'GET',
    url: '/files',
    handler: async function (request, reply) {
      const path = request.query?.path ?? '';
      const files = await useCases.getFiles({ pathname: path });
      return reply.code(200).send(files);
    },
  });

  fastify.route({
    method: 'GET',
    url: '/files/download',
    handler: async function (request, reply) {
      const path = request.query?.path ?? '';
      return reply.download(path, { dotfiles: 'allow' });
    },
  });

  done();
};
