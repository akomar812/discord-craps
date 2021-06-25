'use strict';
const prefix = '!';
const Discord = require('discord.js');
const craps = require('../craps').textInterface({ prefix });
const client = new Discord.Client();
const keys = require('./.discord.json');
const token = keys.token;
const gifToken = keys.gif;
const channels = keys.channels;
const zazz = require('./zazz.js');
const MAINTENANCE_MODE = false;

client.on('ready', () => {
  console.log('Discord client ready');
});

client.on('message', async message => {
  if (channels.indexOf(message.channel.name) < 0) {
    return;
  }

  if (MAINTENANCE_MODE && message.content[0] === prefix) {
    const cmd = message.content.substr(1).trim();
    console.log(`${message.author.username} is attempting to run craps cmd: ${cmd}`);
    return message.channel.send('Maintenance mode (Andrew broke something) be back shortly...');
  }

  if (message.author.username !== 'craps') {
    const z = await zazz.up({ token: gifToken }, message.content, (msg) => message.channel.send(msg));

    if (z) {
      console.log('Zazzing completed');
    }
  }

  if (message.content[0] === prefix) {
    const cmd = message.content.substr(1).trim();
    console.log(`${message.author.username} is attempting to run craps cmd: ${cmd}`);
    craps(message.author.username, cmd, (msg) => message.channel.send('```'+msg+'```'));
  }
});

client.login(token);