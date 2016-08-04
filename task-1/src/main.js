const Pokemon = require('./Pokemon.js');
const PokemonList = require('./PokemonList.js');

const lostPokemons = [
  new Pokemon('Bulbasaur', 1),
  new Pokemon('Ivysaur', 2),
  new Pokemon('Venusaur', 3),
  new Pokemon('Charmander', 4),
  new Pokemon('Charmeleon', 5),
  new Pokemon('Charizard', 6),
  new Pokemon('Squirtle', 7),
  new Pokemon('Butterfree', 12),
  new Pokemon('Weedle', 13),
  new Pokemon('Kakuna', 14),
];

const foundPokemons = [
  new Pokemon('Wartortle', 8),
  new Pokemon('Blastoise', 9),
  new Pokemon('Caterpie', 10),
  new Pokemon('Metapod', 11),
];

const lost = new PokemonList(...lostPokemons);
const found = new PokemonList(...foundPokemons);

lost.show();
found.show();

lost.moveTo('Weedle', found);

lost.show();
found.show();

process.stdout.write(`Pokemon with max level in lost: ${lost.max().toString()}\n`);
process.stdout.write(`Pokemon with max level in found: ${found.max().toString()}\n`);
