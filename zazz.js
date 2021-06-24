'use strict';

class Zazz {
  constructor(config) {
    this.config = config;
  }

  getRandomMessage(regex) {
    const randomIndex = Math.floor(this.config.catch[regex].length * Math.random());
    return this.config.catch[regex][randomIndex];
  }

  up(msg, send) {
    for (let regex in this.config.catch) {
      if ((new RegExp(regex)).test(msg)) {
        send(this.getRandomMessage(regex));
      }
    }
  }
}

module.exports = new Zazz(require('./.zazz.json'));