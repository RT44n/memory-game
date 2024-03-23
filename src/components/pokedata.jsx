const getPokeData = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20', {mode: 'cors'})
      .then(function(response) {
        return response.json();
      });
  }  

  export default getPokeData;