const fs = require('fs');
const crypto = require('crypto');

const Transform = require('stream').Transform;

class ToMd5Hex extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(crypto.createHash('md5').update(chunk).digest('hex'));
    callback();
  }
}

const readerStream = fs.createReadStream(`${__dirname}/read.txt`);
const writerStream = fs.createWriteStream(`${__dirname}/write.txt`);

const onError = error => process.stdout.write(error.stack);

readerStream.on('error', onError);
writerStream.on('error', onError);

const dataStream = readerStream.pipe(new ToMd5Hex());

dataStream.pipe(writerStream);
dataStream.pipe(process.stdout);
