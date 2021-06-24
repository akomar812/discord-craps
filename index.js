'use strict';
const prefix = '!';
const Discord = require('discord.js');
const craps = require('../craps').textInterface({ prefix });
const client = new Discord.Client();
const token = require('./.discord.json').token;
const zazz = require('./zazz.js');
const MAINTENANCE_MODE = false;

client.on('ready', () => {
  console.log('Discord client ready');
});

client.on('message', message => {
  if (MAINTENANCE_MODE && message.content[0] === prefix) {
    const cmd = message.content.substr(1).trim();
    console.log(`${message.author.username} is attempting to run craps cmd: ${cmd}`);
    return message.channel.send('Maintenance mode (Andrew broke something) be back shortly...');
  }

  zazz.up(message.content, (msg) => message.channel.send(msg));

  if (message.content[0] === prefix) {
    const cmd = message.content.substr(1).trim();
    console.log(`${message.author.username} is attempting to run craps cmd: ${cmd}`);
    craps(message.author.username, cmd, (msg) => message.channel.send('```'+msg+'```'));
  }
});

client.login(token);