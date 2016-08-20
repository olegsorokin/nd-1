const fs = require('fs');

const ToHex = require('./lib/ToHex');

const readerStream = fs.createReadStream(`${__dirname}/read.txt`);
const writerStream = fs.createWriteStream(`${__dirname}/write.txt`);

const onError = error => process.stderr.write(error.stack);

readerStream.on('error', onError);
writerStream.on('error', onError);

const dataStream = readerStream.pipe(new ToHex());

dataStream.pipe(writerStream);
dataStream.pipe(process.stdout);
