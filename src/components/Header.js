import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Melee Memory Game</h1>
        <p>Don't Click The Same Image Twice</p>
      </div>
      <div className="header-background-image"></div>
    </div>
  );
};

export default Header;
