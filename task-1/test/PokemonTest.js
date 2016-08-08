const expect = require('chai').expect;
const Pokemon = require('./../src/Pokemon');

describe('Pokemon', () => {
  before(() => {
    this.pokemon = new Pokemon('Bulbasaur', 1);
  });

  describe('#constructor()', () => {
    it('should creates a pokemon with name and level', () => {
      expect(this.pokemon.name).to.equal('Bulbasaur');
      expect(this.pokemon.level).to.equal(1);
    });
  });

  describe('#toString()', () => {
    it('should returns pokemon instance of pokemon as a string', () => {
      expect(this.pokemon.toString()).to.equal('Pokemon { name: Bulbasaur, level: 1 }');
    });
  });

  describe('#valueOf()', () => {
    it('should returns pokemon level', () => {
      expect(this.pokemon.valueOf()).to.equal(1);
    });
  });
});
