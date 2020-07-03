import React from "react";
import styles from "../styles";
import cards from "../cards";
import CardItem from "./CardItem";

const CardList = () => {
  //  duplicateCards = [...cards, ...cards];
  const CardList = cards.map((card) => <CardItem card={card} />);
  return <div style={styles.list}>{CardList}</div>;
};

export default CardList;
