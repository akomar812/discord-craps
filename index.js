'use strict';
const prefix = '!';
const Discord = require('discord.js');
const craps = require('../craps').asyncInterface({ prefix });
const client = new Discord.Client();
const token = require('./.discord.json').token;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content[0] === prefix) {
    const cmd = message.content.substr(1);
    console.log(`${message.author.username} is attempting to run craps cmd: ${cmd}`);
    craps(message.author.username, cmd, (msg) => message.channel.send('```'+msg+'```'));
  }
});

client.login(token);