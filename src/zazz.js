'use strict';
const fetch = require('node-fetch');

class Zazz {
  constructor(config) {
    this.config = config;
  }

  async getRandomMessage(opts, regex) {
    const random = this.config[regex][Math.floor(this.config[regex].length * Math.random())];

    if (random.indexOf('/gif') === 0) {
      const res = await fetch(`https://api.tenor.com/v1/search?q=${random.slice(5)}&key=${opts.token}&limit=10`);
      const gifs = await res.json();
      return gifs.results[Math.floor(gifs.results.length * Math.random())].url;
    }

    return random;
  }

  async up(opts, msg, send) {
    const messages = [];

    for (let regex in this.config) {
      if ((new RegExp(regex)).test(msg)) {
        const msg = await this.getRandomMessage(opts, regex);
        send(msg);
        messages.push(msg);
      }
    }

    return messages;
  }
}

module.exports = new Zazz(require('../.zazz.json'));