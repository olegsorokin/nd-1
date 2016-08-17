const Transform = require('stream').Transform;

class Square extends Transform {
  _transform(chunk, encoding, callback) {
    setTimeout(() => {
      const number = Number(chunk.toString());
      const square = Math.pow(number, 2);
      this.push(`${square}\n`);
      callback();
    }, 1000);
  }
}

module.exports = Square;
