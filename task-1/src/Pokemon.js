class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  toString() {
    return `Pokemon { name: ${this.name}, level: ${this.level} }`;
  }
  valueOf() {
    return this.level;
  }
  show() {
    process.stdout.write(`${this.toString()}\n`);
  }
}

module.exports = Pokemon;
