const RandomNumbers = require('./lib/RandomNumbers');
const StdoutWriter = require('./lib/StdoutWriter');
const Square = require('./lib/Square');

const randomNumbers = new RandomNumbers();
const stdoutWriter = new StdoutWriter();
const square = new Square();

const onError = error => process.stderr.write(error.stack);

randomNumbers.on('error', onError);
stdoutWriter.on('error', onError);
square.on('error', onError);

randomNumbers.pipe(square).pipe(stdoutWriter);
