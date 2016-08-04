const expect = require('chai').expect;
const Pokemon = require('./../src/Pokemon.js');
const PokemonList = require('./../src/PokemonList.js');

describe('PokemonList', () => {
  beforeEach(() => {
    this.pokemon1 = new Pokemon('Bulbasaur', 1);
    this.pokemon2 = new Pokemon('Ivysaur', 3);
    this.pokemon3 = new Pokemon('Venusaur', 2);
    this.full = new PokemonList(this.pokemon1, this.pokemon2, this.pokemon3);
    this.empty = new PokemonList();
  });

  describe('#constructor()', () => {
    it('should creates an empty pokemon list', () => {
      expect(this.empty.length).to.equal(0);
    });

    it('should creates a pokemon list', () => {
      expect(this.full.length).to.equal(3);
      expect(this.full[0]).to.equal(this.pokemon1);
      expect(this.full[1]).to.equal(this.pokemon2);
      expect(this.full[2]).to.equal(this.pokemon3);
    });

    it('should creates pokemon list only with Pokemon', () => {
      const pokemonList = new PokemonList(this.pokemon1, 123);
      expect(pokemonList.length).to.equal(1);
      expect(pokemonList[0].name).to.equal(this.pokemon1.name);
      expect(pokemonList[0].level).to.equal(this.pokemon1.level);
    });
  });

  describe('#toString()', () => {
    it('should returns count equals to 0 for empty pokemon list', () => {
      expect(this.empty.toString()).to.equal('Count of pokemons: 0');
    });

    it('should returns pokemons list instance as a string', () => {
      const pokemons = 'Count of pokemons: 3\n'
                     + 'Pokemon { name: Bulbasaur, level: 1 }\n'
                     + 'Pokemon { name: Ivysaur, level: 3 }\n'
                     + 'Pokemon { name: Venusaur, level: 2 }';
      expect(this.full.toString()).to.equal(pokemons);
    });
  });

  describe('#grab()', () => {
    it('should returns pokemon from list', () => {
      const pokemon = this.full[0];
      expect(this.full.grab(this.full[0].name)).to.equal(pokemon);
      expect(this.full.length).to.equal(2);
      expect(this.full.grab('unknown')).to.equal(null);
    });
  });

  describe('#moveTo()', () => {
    it('should move pokemon from one list to another', () => {
      const pokemon = this.full[0];
      this.full.moveTo(pokemon.name, this.empty);
      expect(this.full.length).to.equal(2);
      expect(this.empty.length).to.equal(1);
      expect(this.empty[0].name).to.equal(pokemon.name);
      expect(this.empty[0].level).to.equal(pokemon.level);
    });
  });

  describe('#max()', () => {
    it('should returns a pokemon of max level', () => {
      expect(this.full.max()).to.equal(this.pokemon2);
      expect(this.empty.max()).to.equal(null);
    });
  });
});
