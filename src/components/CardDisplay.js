import React, { useEffect, useState } from "react";
import Card from "./Card";
import uniqid from "uniqid";

//images for cards
import bowser from "../images/melee-cards/bowser.png";
import captainFalcon from "../images/melee-cards/captain-falcon.png";
import donkeyKong from "../images/melee-cards/donkey-kong.png";
import drMario from "../images/melee-cards/dr-mario.png";
import falco from "../images/melee-cards/falco.png";
import fox from "../images/melee-cards/fox.png";
import ganondorf from "../images/melee-cards/ganondorf.png";
import iceClimbers from "../images/melee-cards/ice-climbers.png";
import jigglypuff from "../images/melee-cards/jigglypuff.png";
import kirby from "../images/melee-cards/kirby.png";
import link from "../images/melee-cards/link.png";
import luigi from "../images/melee-cards/luigi.png";
import mario from "../images/melee-cards/mario.png";
import marth from "../images/melee-cards/marth.png";
import mewtwo from "../images/melee-cards/mewtwo.png";
import mrGameAndWatch from "../images/melee-cards/mr-game-and-watch.png";
import ness from "../images/melee-cards/ness.png";
import peach from "../images/melee-cards/peach.png";
import pichu from "../images/melee-cards/pichu.png";
import pikachu from "../images/melee-cards/pikachu.png";
import roy from "../images/melee-cards/roy.png";
import samus from "../images/melee-cards/samus.png";
import yoshi from "../images/melee-cards/yoshi.png";
import youngLink from "../images/melee-cards/young-link.png";
import zelda from "../images/melee-cards/zelda.png";

const CardDisplay = (props) => {
  const { score, handleClick } = props;

  const characterArray = [
    {
      id: uniqid(),
      src: bowser,
      title: "Bowser",
    },
    {
      id: uniqid(),
      src: captainFalcon,
      title: "Captain Falcon",
    },
    {
      id: uniqid(),
      src: donkeyKong,
      title: "Donkey Kong",
    },
    {
      id: uniqid(),
      src: drMario,
      title: "Dr. Mario",
    },
    {
      id: uniqid(),
      src: falco,
      title: "Falco",
    },
    {
      id: uniqid(),
      src: fox,
      title: "Fox",
    },
    {
      id: uniqid(),
      src: ganondorf,
      title: "Ganondorf",
    },
    {
      id: uniqid(),
      src: iceClimbers,
      title: "Ice Climbers",
    },
    {
      id: uniqid(),
      src: jigglypuff,
      title: "Jigglypuff",
    },
    {
      id: uniqid(),
      src: kirby,
      title: "Kirby",
    },
    {
      id: uniqid(),
      src: link,
      title: "Link",
    },
    {
      id: uniqid(),
      src: luigi,
      title: "Luigi",
    },
    {
      id: uniqid(),
      src: mario,
      title: "Mario",
    },
    {
      id: uniqid(),
      src: marth,
      title: "Marth",
    },
    {
      id: uniqid(),
      src: mewtwo,
      title: "Mewtwo",
    },
    {
      id: uniqid(),
      src: mrGameAndWatch,
      title: "Mr. Game and Watch",
    },
    {
      id: uniqid(),
      src: ness,
      title: "Ness",
    },
    {
      id: uniqid(),
      src: peach,
      title: "Peach",
    },
    {
      id: uniqid(),
      src: pichu,
      title: "Pichu",
    },
    {
      id: uniqid(),
      src: pikachu,
      title: "Pikachu",
    },
    {
      id: uniqid(),
      src: roy,
      title: "Roy",
    },
    {
      id: uniqid(),
      src: samus,
      title: "Samus",
    },
    {
      id: uniqid(),
      src: yoshi,
      title: "Yoshi",
    },
    {
      id: uniqid(),
      src: youngLink,
      title: "Young Link",
    },
    {
      id: uniqid(),
      src: zelda,
      title: "Zelda",
    },
  ];

  const [cardArray, setCardArray] = useState(characterArray);

  //JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates
  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    setCardArray(array);
  };

  useEffect(() => {
    const newCardArray = [...cardArray];
    shuffleCards(newCardArray);
    //Eslint didn't like that I'm referencing cardArray without it in the dependency array. If I put it in an infinite loop is created however
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  return (
    <div className="card-display">
      {cardArray.map((card) => {
        return (
          <Card
            key={card.id}
            src={card.src}
            title={card.title}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default CardDisplay;
