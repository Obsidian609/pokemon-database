// 387-493 for all sinnoh pokemon
// https://pokeapi.co/api/v2/pokemon/ditto
// https://pokeapi.co/api/v2/pokemon-form/387/
// 
function getPokeData() {
  axios.get('https://pokeapi.co/api/v2/generation/4/')
  .then((response) => {
    console.log(response)

  const bulbasaur = document.createElement('img')
  bulbasaur.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  pokeSprite.append(bulbasaur)

  const charmander = document.createElement('img')
  charmander.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  pokeSprite.append(charmander)

  const squirtle = document.createElement('img')
  squirtle.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
  pokeSprite.append(squirtle)

  const pikachu = document.createElement('img')
  pikachu.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  pokeSprite.append(pikachu)

  const chikorita = document.createElement('img')
  chikorita.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
  pokeSprite.append(chikorita)

  const cyndaquil = document.createElement('img')
  cyndaquil.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png'
  pokeSprite.append(cyndaquil)

  const totodile = document.createElement('img')
  totodile.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'
  pokeSprite.append(totodile)

  const treecko = document.createElement('img')
  treecko.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png'
  pokeSprite.append(treecko)

  const torchic = document.createElement('img')
  torchic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png'
  pokeSprite.append(torchic)

  const mudkip = document.createElement('img')
  mudkip.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png'
  pokeSprite.append(mudkip)

  const turtwig = document.createElement('img')
  turtwig.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png'
  pokeSprite.append(turtwig)

  const chimchar = document.createElement('img')
  chimchar.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png'
  pokeSprite.append(chimchar)

  const piplup = document.createElement('img')
  piplup.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png'
  pokeSprite.append(piplup)
  })
.catch((error) => {
console.log(error)
})
}
getPokeData()

// function getPokeDex() {
//   axios.get('https://pokeapi.co/api/v2/generation/4/')
//   .then((response) => {
//       console.log((response.data.pokemon_species))
//       const sinnohDex = response.data.pokemon_species
//   })
// .catch((error) => {
// console.log(error)
// })
// }
// getPokeDex();