const Writable = require('stream').Writable;

class StdoutWriter extends Writable {
  _write(chunk, encoding, callback) {
    process.stdout.write(chunk.toString());
    callback();
  }
}

module.exports = StdoutWriter;
