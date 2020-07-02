import React from "react";
//cards
import cards from "./cards";
//style
import styles from "./styles";
//component
import CardList from "./components/CardList";

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
      <CardList />
    </div>
  );
}

export default App;
