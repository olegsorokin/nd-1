const assert = require('assert');
const Pokemon = require('./../src/Pokemon.js');
const PokemonList = require('./../src/PokemonList.js');

describe('PokemonList', () => {
  beforeEach(() => {
    this.pokemon1 = new Pokemon('Bulbasaur', 1);
    this.pokemon2 = new Pokemon('Ivysaur', 3);
    this.pokemon3 = new Pokemon('Venusaur', 2);
    this.lost = new PokemonList(this.pokemon1, this.pokemon2, this.pokemon3);
    this.found = new PokemonList();
  });

  describe('#constructor()', () => {
    it('should creates a pokemons list', () => {
      assert.equal(3, this.lost.length);
      assert.equal(0, this.found.length);
      assert.equal(this.pokemon1, this.lost[0]);
      assert.equal(this.pokemon2, this.lost[1]);
    });
  });

  describe('#toString()', () => {
    it('should returns pokemon instance of pokemons list as a string', () => {
      const emptyList = 'Count of pokemons: 0';
      const pokemons = 'Count of pokemons: 3\n'
                     + 'Pokemon { name: Bulbasaur, level: 1 }\n'
                     + 'Pokemon { name: Ivysaur, level: 3 }\n'
                     + 'Pokemon { name: Venusaur, level: 2 }';
      assert.equal(pokemons, this.lost.toString());
      assert.equal(emptyList, this.found.toString());
    });
  });

  describe('#grab()', () => {
    it('should returns pokemon from list', () => {
      const pokemonInList = this.lost[0];
      const pokemon = this.lost.grab(pokemonInList.name);
      assert.equal(2, this.lost.length);
      assert.equal(pokemonInList, pokemon);
    });
  });

  describe('#moveTo()', () => {
    it('should move pokemon from one list to another', () => {
      const pokemonInList = this.lost[0];
      this.lost.moveTo(pokemonInList.name, this.found);
      assert.equal(2, this.lost.length);
      assert.equal(1, this.found.length);
    });
  });

  describe('#max()', () => {
    it('should returns a pokemon of max level', () => {
      assert.equal(this.pokemon2, this.lost.max());
    });
  });
});
