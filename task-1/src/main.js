const PokemonList = require('./PokemonList.js');

const pokemons = [
  ['Bulbasaur', 1],
  ['Ivysaur', 2],
  ['Venusaur', 3],
  ['Charmander', 4],
  ['Charmeleon', 5],
  ['Charizard', 6],
  ['Squirtle', 7],
  ['Wartortle', 8],
  ['Blastoise', 9],
  ['Caterpie', 10],
  ['Metapod', 11],
  ['Butterfree', 12],
  ['Weedle', 13],
  ['Kakuna', 14],
];

const lost = new PokemonList();
const found = new PokemonList();

pokemons.forEach((pokemon) => {
  lost.add(pokemon[0], pokemon[1]);
});

lost.show();
found.show();

lost.moveTo('Metapod', found);

lost.show();
found.show();

process.stdout.write(`Pokemon with max level in lost: ${lost.max().toString()}\n`);
process.stdout.write(`Pokemon with max level in found: ${found.max().toString()}\n`);
