import React, { useState } from "react";
import CardDisplay from "./CardDisplay";
import Scoreboard from "./Scoreboard";

const Main = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  const incrementScore = () => {
    setScore(score + 1);
  }

  const resetScore = () => {
    setScore(0);
  }

  const updateBestScore = () => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  }

  const game = (e) => {
    console.log(e.target);
  }

  return (
    <div className="main">
      <Scoreboard score={score} bestScore={bestScore} />
      <CardDisplay score={score} game={game}/>
    </div>
  );
};

export default Main;
