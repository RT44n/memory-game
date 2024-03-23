import getPokeData from "./pokedata";
const GameScreen = () => {
    getPokeData().then(pokeData => {
      console.log(pokeData.results[4]);
      console.log(pokeData.results)
    });
  }

  export default GameScreen;