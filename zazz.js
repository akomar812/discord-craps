'use strict';

class Zazz {
  constructor(config) {
    this.config = config;
  }

  getRandomMessage(regex) {
    return this.config[regex][Math.floor(this.config[regex].length * Math.random())];
  }

  up(msg, send) {
    for (let regex in this.config) {
      if ((new RegExp(regex)).test(msg)) send(this.getRandomMessage(regex));
    }
  }
}

module.exports = new Zazz(require('./.zazz.json'));