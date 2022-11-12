import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  const {id, src, title} = props;
  return (
    <div className="card" key={id}>
      <img src={src} alt={title} />
    </div>
  )
}

export default Card;