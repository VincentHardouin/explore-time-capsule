const useCases = require('../../application/use_cases');
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

  fastify.route({
    method: 'POST',
    url: '/configurations',
    schema: {
      body: {
        type: 'object',
        properties: {
          address: { type: 'string' },
          password: { type: 'string' },
        },
        required: ['address', 'password'],
      },
    },
    handler: async function (request, reply) {
      const params = request.body;
      const config = await useCases.saveConfiguration(params);
      return reply.code(201).send(config);
    },
  });

  done();
};
