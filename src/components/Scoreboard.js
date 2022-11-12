import React from "react";
import "../styles/Scoreboard.css"

const Scoreboard = (props) => {
  const {score, bestScore} = props;
  return (
    <div className="scoreboard">
      <h2>Best Score: {bestScore}</h2>
      <h2>Score: {score}</h2>
    </div>
  )
}

export default Scoreboard;