import React from "react";
//cards
import cards from "./cards";
//style
import styles from "./styles";
//component
import CardList from "./components/CardList";
//flipcards
//import Flippy, { FrontSide, BackSide } from "react-flippy";

// i did installed alot of libreies material-ui and react flippy - hard to get them work! stucked with grid
//so did it in the static way! I NEED YOUR HELP LAILA THIS GAVE ME HEADACH !!
function App() {
  return (
    <div>
      <header>
        <h1 style={styles.text}>Remember it ?</h1>
        <h4 style={styles.text}>Be careful ! Memory Loss Ahead!</h4>
        <img
          style={styles.gameImage}
          src="https://filmdaily.co/wp-content/uploads/2020/06/90s-lede-1300x731.jpg"
          alt="logo90s"
        />
        ;
      </header>
      {/* did this the static way! */}
      <center>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[0].image}
                key={cards[0].id}
              />
            </div>
            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[1].image}
                key={cards[1].id}
              />
            </div>

            <div className="w-100"></div>

            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[2].image}
                key={cards[2].id}
              />
            </div>
            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[3].image}
                key={cards[3].id}
              />
            </div>
            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[0].image}
                key={cards[0].id}
              />
            </div>
            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[1].image}
                key={cards[1].id}
              />
            </div>

            <div className="w-100"></div>

            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[2].image}
                key={cards[2].id}
              />
            </div>
            <div className="col-6 col-sm-3">
              <img
                style={styles.cardImage}
                src={cards[3].image}
                key={cards[3].id}
              />
            </div>
          </div>
        </div>
        {/* <CardList /> */}
      </center>
    </div>
  );
}

export default App;
