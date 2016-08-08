const Pokemon = require('./Pokemon');

class PokemonList extends Array {
  constructor(...args) {
    super(...(args.filter(p => p.constructor === Pokemon)));
  }

  add(name, level) {
    this.push(new Pokemon(name, level));
  }

  toString() {
    const count = `Count of pokemons: ${this.length}`;
    if (this.length === 0) {
      return count;
    }
    return `${count}\n${this.join('\n')}`;
  }

  show() {
    process.stdout.write(`${this.toString()}\n`);
  }

  grab(name) {
    const index = this.findIndex(p => p.name === name);
    if (index === -1) {
      return undefined;
    }
    return this.splice(index, 1)[0];
  }

  move(name, targetList) {
    const pokemon = this.grab(name);
    if (!pokemon) {
      process.stdout.write(`Pokemon "${name}" not found.\n`);
    }
    targetList.push(pokemon);
  }

  max() {
    const maxLevel = Math.max.apply(null, this);
    return this.find(p => p.level === maxLevel);
  }
}

module.exports = PokemonList;
