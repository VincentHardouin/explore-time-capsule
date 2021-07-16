const { timeCapsule } = require('../../../config/environment');

module.exports = function (fastify, options, done) {
  fastify.route({
    method: 'GET',
    url: '/configurations/is-set',
    handler: async function (request, reply) {
      const isConfig = !!(timeCapsule.address && timeCapsule.password);
      return reply.code(200).send({ isConfig });
    },
  });

  done();
};
