const useCases = require('../../application/use_cases');

module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'GET',
    url: '/files',
    handler: async function (request, reply) {
      const files = await useCases.getFiles();
      reply.code(200).send(files);
    },
  });
  done();
};
