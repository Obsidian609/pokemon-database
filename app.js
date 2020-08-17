const P = new Pokedex.Pokedex();

const getData = () => {
        P.getPokemonByName("butterfree")
        .then(function(response) {
          console.log(response)
        //   console.log(response.sprites.other) to get to imgs
    
        })
    }
    
    getData()