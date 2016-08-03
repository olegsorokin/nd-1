const Pokemon = require('./Pokemon.js');

class PokemonList extends Array {
  constructor(...args) {
    args.forEach((item) => {
      if (item.constructor !== Pokemon) {
        throw new TypeError(`${item} is not a Pokemon instance`);
      }
    });
    super(...args);
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
    const pokemon = this.filter(p => p.name === name)[0];
    if (pokemon) {
      const index = this.indexOf(pokemon);
      this.splice(index, 1);
    }
    return pokemon;
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
    if (this.length === 0) {
      return null;
    }
    const maxLevel = Math.max.apply(null, this);
    return this.filter(p => p.level === maxLevel)[0];
  }
}

module.exports = PokemonList;
