// 387-493 for all sinnoh pokemon
// https://pokeapi.co/api/v2/pokemon/ditto

const getData = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon/387')
  .then((res) => {
    const response = res.data.sprites.other
    console.log(res.data.sprites.other)

    // response.forEach((res) => {
    //   console.log(res.data.sprites.other)
      
    //   const pictureDiv = document.querySelector('.pokemon')

    //   const pokemonDiv = document.createElement('div')
    //   pokemonDiv.classList = '.pokemon-div'
    //   pictureDiv.append(pokemonDiv)
  
  })
  .catch((error) => {
    console.log(`${error}`)
  })
  .finally(() => {
    console.log('Success')
  })
}
  getData()
