require('dotenv').config();

function buildEnv() {
  const env = {
    name: 'development',

    authentication: {
      secret: process.env.AUTH_SECRET,
      tokenLifespan: process.env.TOKEN_LIFE_SPAN || '1d',
    },

    server: {
      port: process.env.PORT || 3002,
      host: process.env.HOST || 'localhost',
      logger: true,
    },
  };

  if (process.env.NODE_ENV === 'test') {
    env.name = 'test';
    env.authentication.secret = 'secret-test';
    env.server.port = null;
    env.server.logger = false;
  }

  if (process.env.NODE_ENV === 'production') {
    env.name = 'production';
  }

  return env;
}

module.exports = buildEnv();
