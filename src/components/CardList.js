import React, { useState } from "react";
import styles from "../styles";
import cards from "../cards";
import CardItem from "./CardItem";

let twoCards = [];
const CardList = () => {
  const [_cards, setCards] = useState(cards);
  const flippedCard = (cardId) => {
    const foundCard = _cards.find((card) => card.id === cardId);
    foundCard.clicked = true;
    setCards([..._cards]);
    twoCards.push(foundCard);
    if (twoCards.length === 2) {
      console.log("ok");
      if (twoCards[0].image === twoCards[1].image) {
        twoCards = [];
        console.log(twoCards, "notok");
      } else console.log(twoCards, "notok");
      foundCard.clicked = false;
      const foundCardTwo = _cards.find((card) => card.id === twoCards[0].id);
      foundCardTwo.clicked = false;
      setCards([..._cards]);
    }
  };
  //duplicateCards = [...cards, ...cards];
  const cardList = cards.map((card) => (
    <CardItem card={card} flippedCard={flippedCard} key={card.id} />
  ));
  return (
    <div className="container" style={styles.list}>
      <div className="row">{cardList}</div>
    </div>
  );
};

export default CardList;
