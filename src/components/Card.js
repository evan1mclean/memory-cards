import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  const {id, src, title, handleClick} = props;
  return (
    <div className="card" key={id} title={title} onClick={handleClick}>
      <img src={src} alt={title} />
    </div>
  )
}

export default Card;