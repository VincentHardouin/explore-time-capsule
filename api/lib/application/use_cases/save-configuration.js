const path = require('path');
const fs = require('fs');
const environment = require('../../../config/environment');

module.exports = async ({ address, password }) => {
  const configPath = path.join(__dirname, '../../../config/time-capsule.json');
  await fs.writeFileSync(configPath, JSON.stringify({ address, password }));
  environment.timeCapsule.address = address;
  environment.timeCapsule.password = password;

  return { address, password };
};
