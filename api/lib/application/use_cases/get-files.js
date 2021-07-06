const fs = require('fs');

module.exports = async () => {
  const dir = './';

  const files = await fs.readdir(dir);
  files.forEach(console.log);
};
