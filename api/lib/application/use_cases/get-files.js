const fs = require('fs');
const bytes = require('bytes');

module.exports = async () => {
  const dir = './';

  const filenames = await fs.readdirSync(dir);
  const files = filenames.map((filename) => {
    const stats = fs.statSync(`${dir}${filename}`);

    return {
      name: filename,
      extension: stats.isFile() ? filename.split('.').pop() : undefined,
      size: bytes(stats.size),
      isDirectory: stats.isDirectory(),
    };
  });
  files.forEach(console.log);
  return files;
};
