const Pokedex = require('pokeapi-js-wrapper');

const P = new Pokedex.Pokedex(options);

const getData = () => {
  P.getPokemonByName('charmander')
  .then((res) => {
    console.log(res)
  })
}
  getData()