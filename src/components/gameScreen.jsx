import React, { useState, useEffect } from "react";
import getPokeData from "./pokedata";
import "../styles/gameScreen.css";

const GameScreen = () => {
  const [pokeData, setPokeData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getPokeData();
      const updatedData = data.map(pokemon => ({ ...pokemon, status: false }));
      setPokeData(updatedData);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  const changeScore = (index) => {
    if (!pokeData[index].status) {
      setScore(score + 1);
      setPokeData(prevPokeData => {
        const updatedPokeData = [...prevPokeData];
        updatedPokeData[index] = { ...updatedPokeData[index], status: true };
        shufflePokeData(updatedPokeData);
        return updatedPokeData;
      });
    } else {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      const resetPokeData = pokeData.map(pokemon => ({ ...pokemon, status: false }));
      setPokeData(resetPokeData);
      shufflePokeData(resetPokeData);
    }
  };

  const shufflePokeData = (data) => {
    const shuffledData = [...data];
    for (let i = shuffledData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
    }
    setPokeData(shuffledData);
  };

  return (
    <>
      <p>Best Score: {bestScore}</p>
      <p>Score: {score}</p>
      <div className="cardHolder">
        {pokeData.map((pokemon, index) => (
          <div
            className={`pokeCard`}
            key={pokemon.Pokename}
            onClick={() => changeScore(index)}
          >
            <img className="pokeImage" src={pokemon.pokeImage} alt={pokemon.Pokename} />
            <p>{pokemon.Pokename}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameScreen;