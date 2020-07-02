import React from "react";
import styles from "../styles";
import cards from "../cards";
import CardItem from "./CardItem";

const CardList = () => {
  //const duplicateCards = [...cards, ...cards];
  const CardList = cards.map((card) => <CardItem card={card} />);
  return (
    <div style={styles.list}>
      {CardList}
      <div className="container">
        <div className="row">
          <div className="col">
            <img style={styles.cardImage} alt={card.name} src={card.image} />
          </div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
        <div className="row">
          <div className="col-8">col-8</div>
          <div className="col-4">col-4</div>
        </div>
      </div>
      ;
    </div>
  );
};

export default CardList;
