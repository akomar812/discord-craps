'use strict';

class Zazz {
  constructor(config) {
    this.config = config;
  }

  getRandomMessage(regex) {
    const randomIndex = Math.floor(this.config[regex].length * Math.random());
    return this.config[regex][randomIndex];
  }

  up(msg, send) {
    for (let regex in this.config) {
      if ((new RegExp(regex)).test(msg)) {
        send(this.getRandomMessage(regex));
      }
    }
  }
}

module.exports = new Zazz(require('./.zazz.json'));