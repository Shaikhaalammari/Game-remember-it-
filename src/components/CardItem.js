import React from "react";
import styles, { cardImage } from "../styles";

//const flip=false
const CardItem = (props) => {
  const card = props.card;
  const afterFlip = () => {
    props.flippedCard(props.card.id);
  };
  return (
    <div style={styles.cardImage} key={card.id}>
      <img
        style={styles.cardImage}
        onClick={afterFlip}
        src={
          card.clicked === true
            ? card.image
            : "https://filmdaily.co/wp-content/uploads/2020/06/90s-lede-1300x731.jpg"
        }
      />
    </div>
  );
};
//onClick={card.clickd === "false" ? "true" : "false"}
//onClick={flip=!flip}
export default CardItem;
