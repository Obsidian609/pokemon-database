// const Pokedex = require('pokeapi-js-wrapper');

// const P = new Pokedex.Pokedex(options);

const getData = () => {
  P.getPokemonByName('eevee')
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(`${error}`)
  })
  .finally(() => {
    console.log('Success')
  })
}
  getData()