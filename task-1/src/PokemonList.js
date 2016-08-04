const Pokemon = require('./Pokemon.js');

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
    for (const pokemon of this) {
      if (pokemon.name === name) {
        this.splice(this.indexOf(pokemon), 1);
        return pokemon;
      }
    }
    return null;
  }

  moveTo(name, pokemons) {
    const pokemon = this.grab(name);
    if (pokemon) {
      pokemons.add(pokemon.name, pokemon.level);
    } else {
      process.stdout.write(`Pokemon "${name}" not found.\n`);
    }
  }

  max() {
    const maxLevel = Math.max.apply(null, this);
    for (const pokemon of this) {
      if (pokemon.level === maxLevel) {
        return pokemon;
      }
    }
    return null;
  }
}

module.exports = PokemonList;
