const getPokeData = () => {
  let pokeDataArray = [];
  return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', { mode: 'cors' })
    .then(function(response) {
      return response.json(); 
    })
    .then(function(pokeData) {
      for (let i = 0; i < 12; i++) {
        pokeDataArray.push({ 
          Pokename: pokeData.results[i].name, 
         
          pokeImage: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + (i + 1) + '.png'
        });
      }
  
      return pokeDataArray; 
    })
    .catch(function(error) { 
      console.error("Error fetching Pokémon data:", error);
      throw error; 
    });
};

export default getPokeData;