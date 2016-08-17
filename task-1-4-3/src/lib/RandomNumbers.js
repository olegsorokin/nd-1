const Readable = require('stream').Readable;

class RandomNumbers extends Readable {
  _read() {
    this.push(String(this.randomNumber()));
  }
  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}

module.exports = RandomNumbers;
