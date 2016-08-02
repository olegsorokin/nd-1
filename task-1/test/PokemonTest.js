const assert = require('assert');
const Pokemon = require('./../src/Pokemon.js');

describe('Pokemon', () => {
  before(() => {
    this.pokemon = new Pokemon('Bulbasaur', 1);
  });

  describe('#constructor()', () => {
    it('should creates a pokemon with name and level', () => {
      assert.equal('Bulbasaur', this.pokemon.name);
      assert.equal(1, this.pokemon.level);
    });
  });

  describe('#toString()', () => {
    it('should returns pokemon instance of pokemon as a string', () => {
      assert.equal('Pokemon { name: Bulbasaur, level: 1 }', this.pokemon.toString());
    });
  });

  describe('#valueOf()', () => {
    it('should returns pokemon level', () => {
      assert.equal(1, this.pokemon.valueOf());
    });
  });
});
