//Function to retrive API data
function getPokeData(id) {
  axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
  .then((response) => {
    const pokeData = response.data
    displayData(pokeData)
  })
.catch((error) => {
console.log(error)
})
}

//Function to create an element, store the choseninformation, 
//and append it to the .pokeInfo div
function displayData(pokeData) {
  const entry = document.createElement('h2')
  entry.innerHTML = 'Pokedex Entry:' + pokeData.id
  const pokeInfo = document.querySelector('.pokeInfo')
  pokeInfo.append(entry)

  const name = document.createElement('h2')
  name.innerHTML = 'Name:' + pokeData.name
  removeText()
  pokeInfo.append(name)

  const flavorText = document.createElement('h2')
  flavorText.innerHTML = pokeData.flavor_text_entries[0].flavor_text
  pokeInfo.append(flavorText)
  pokeData.style.display = 'none'
}

//Function to remove previous entry when clicking another starter
function removeText() { 
  const oldText = document.querySelector('.pokeInfo')
  while (oldText.lastChild) {
    oldText.removeChild(oldText.lastChild)
  }
}

//Hard coded 15 sprite images and appends to the .pokeId div;
//each with a click event
const bulbasaur = document.createElement('img')
  bulbasaur.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  pokeId.append(bulbasaur)
  bulbasaur.addEventListener('click', () => {
  getPokeData(1)
})

const charmander = document.createElement('img')
  charmander.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
  pokeId.append(charmander)
  charmander.addEventListener('click', () => {
    getPokeData(4)
  })

const squirtle = document.createElement('img')
  squirtle.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
  pokeId.append(squirtle)
  squirtle.addEventListener('click', () => {
    getPokeData(7)
  })

const chikorita = document.createElement('img')
  chikorita.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png'
  pokeId.append(chikorita)
  chikorita.addEventListener('click', () => {
    getPokeData(152)
  })

const cyndaquil = document.createElement('img')
  cyndaquil.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png'
  pokeId.append(cyndaquil)
  cyndaquil.addEventListener('click', () => {
    getPokeData(155)
  })

const totodile = document.createElement('img')
  totodile.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png'
  pokeId.append(totodile)
  totodile.addEventListener('click', () => {
    getPokeData(158)
  })

const treecko = document.createElement('img')
  treecko.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png'
  pokeId.append(treecko)
  treecko.addEventListener('click', () => {
    getPokeData(252)
  })

const torchic = document.createElement('img')
  torchic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png'
  pokeId.append(torchic)
  torchic.addEventListener('click', () => {
    getPokeData(255)
  })

const mudkip = document.createElement('img')
  mudkip.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png'
  pokeId.append(mudkip)
  mudkip.addEventListener('click', () => {
    getPokeData(258)
  })

const turtwig = document.createElement('img')
  turtwig.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png'
  pokeId.append(turtwig)
  turtwig.addEventListener('click', () => {
    getPokeData(387)
  })

const chimchar = document.createElement('img')
  chimchar.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png'
  pokeId.append(chimchar)
  chimchar.addEventListener('click', () => {
    getPokeData(390)
  })

const piplup = document.createElement('img')
  piplup.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png'
  pokeId.append(piplup)
  piplup.addEventListener('click', () => {
    getPokeData(393)
  })

const snivy = document.createElement('img')
  snivy.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png'
  pokeId.append(snivy)
  snivy.addEventListener('click', () => {
    getPokeData(495)
  })

const tepig = document.createElement('img')
  tepig.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png'
  pokeId.append(tepig)
  tepig.addEventListener('click', () => {
    getPokeData(498)
  })

const oshawatt = document.createElement('img')
  oshawatt.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png'
  pokeId.append(oshawatt)
  oshawatt.addEventListener('click', () => {
    getPokeData(501)
  })