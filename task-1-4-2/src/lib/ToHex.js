const Transform = require('stream').Transform;

class ToHex extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString('hex'));
    callback();
  }
}

module.exports = ToHex;
