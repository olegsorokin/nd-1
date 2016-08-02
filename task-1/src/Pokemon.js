class Pokemon {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  toString() {
    return `Pokemon { name: ${this.name}, level: ${this.level} }`;
  }
  show() {
    process.stdout.write(this);
  }
}

module.exports = Pokemon;
