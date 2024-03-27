import React, { useState, useEffect } from "react";
import getPokeData from "./pokedata";
import "../styles/gameScreen.css";

const GameScreen = () => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokeData();
        setPokeData(data);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <>
      <p>Game Screen Content</p>
      <div className="cardHolder">

      {pokeData.map((pokemon, index) => (
        <div className="pokeCard" key={index}>
          <p>{pokemon.Pokename}</p>
          <img src={pokemon.pokeImage} alt={pokemon.Pokename} />
        </div>
      ))}
      </div>
    </>
  );
};

export default GameScreen;