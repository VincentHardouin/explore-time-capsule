#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const questions = [
  {
    type: 'input',
    name: 'address',
    message: "What's your Time Capsule IP Address ?",
  },
  {
    type: 'input',
    name: 'password',
    message: "What's your Time Capsule Disk password ?",
  },
];

async function saveConfig({ address, password }) {
  const configPath = path.join(__dirname, './api/config/time-capsule.json');
  await fs.writeFileSync(configPath, JSON.stringify({ address, password }));
}

async function install() {
  try {
    const answers = await inquirer.prompt(questions);
    await exec('mkdir /mnt/timecapsule');
    await exec(
      `mount.cifs //${answers.address}/Data /mnt/timecapsule/ -o password='${answers.password}',sec=ntlm,vers=1.0`
    );
    await saveConfig(answers);
  } catch (e) {
    console.log('Command failed, please verify provided information');
  }
}

function main() {
  install();
}

main();
