const Pokemon = require('./Pokemon.js');
const PokemonList = require('./PokemonList.js');

const pokemon1 = new Pokemon('Bulbasaur', 1);
const pokemon2 = new Pokemon('Ivysaur', 2);
const pokemon3 = new Pokemon('Venusaur', 3);
const pokemon4 = new Pokemon('Charmander', 4);
const pokemon5 = new Pokemon('Charmeleon', 5);
const pokemon6 = new Pokemon('Charizard', 6);
const pokemon7 = new Pokemon('Squirtle', 7);
const pokemon8 = new Pokemon('Wartortle', 8);
const pokemon9 = new Pokemon('Blastoise', 9);
const pokemon10 = new Pokemon('Caterpie', 10);

const lost = new PokemonList(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6);
const found = new PokemonList(pokemon7, pokemon8, pokemon9, pokemon10);

lost.add('Metapod', 11);
lost.add('Butterfree', 12);

found.add('Weedle', 13);
found.add('Kakuna', 14);

lost.show();
found.show();

lost.moveTo('Metapod', found);

lost.show();
found.show();

process.stdout.write(`Pokemon with max level in lost: ${lost.max().toString()}\n`);
process.stdout.write(`Pokemon with max level in found: ${found.max().toString()}\n`);
