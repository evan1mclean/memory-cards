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
      setBestScore(bestScore + 1);
    }
  }

  const handleClick = (e) => {
    let target = e.target.parentNode.title;
    if (!clickedCards.includes(target)) {
      setClickedCards([...clickedCards, target])
      incrementScore();
      updateBestScore();
    } else {
      resetScore();
      setClickedCards([]);
    }
  }

  return (
    <div className="main">
      <Scoreboard score={score} bestScore={bestScore} />
      <CardDisplay score={score} handleClick={handleClick}/>
    </div>
  );
};

export default Main;
