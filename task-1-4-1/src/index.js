const fs = require('fs');
const crypto = require('crypto');

const readerStream = fs.createReadStream(`${__dirname}/read.txt`);
const writerStream = fs.createWriteStream(`${__dirname}/write.txt`);
const hash = crypto.createHash('md5');

hash.setEncoding('hex');

const onError = error => process.stderr.write(error.stack);

readerStream.on('error', onError);
writerStream.on('error', onError);
hash.on('error', onError);

const data = readerStream.pipe(hash);

data.pipe(writerStream);
data.pipe(process.stdout);
