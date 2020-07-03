import React from "react";
import styles from "../styles";

const CardItem = (props) => {
  const card = props.card;
  return (
    <div style={styles.cardImage} key={card.id}>
      <img style={styles.cardImage} src={card.image} />
    </div>
  );
};

export default CardItem;
