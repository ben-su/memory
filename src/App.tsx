import React from "react";
import "./App.scss";
import { Board } from "./components/Board";
import styles from "./app.module.scss";
import { PlayerInfo } from "./components/PlayerInfo";

const dummyCards = [
  { id: 1, src: require("./img/1.jpg") },
  { id: 2, src: require("./img/2.jpg") },
  { id: 3, src: require("./img/3.jpg") },
  { id: 4, src: require("./img/4.jpg") },
  { id: 1, src: require("./img/1.jpg") },
  { id: 2, src: require("./img/2.jpg") },
  { id: 3, src: require("./img/3.jpg") },
  { id: 4, src: require("./img/4.jpg") },
  { id: 1, src: require("./img/1.jpg") },
  { id: 2, src: require("./img/2.jpg") },
  { id: 3, src: require("./img/3.jpg") },
  { id: 4, src: require("./img/4.jpg") },
  { id: 1, src: require("./img/1.jpg") },
  { id: 2, src: require("./img/2.jpg") },
  { id: 3, src: require("./img/3.jpg") },
  { id: 4, src: require("./img/4.jpg") },
  { id: 1, src: require("./img/1.jpg") },
  { id: 2, src: require("./img/2.jpg") },
  { id: 3, src: require("./img/3.jpg") },
  { id: 4, src: require("./img/4.jpg") },
  { id: 1, src: require("./img/1.jpg") },
  { id: 2, src: require("./img/2.jpg") },
  { id: 3, src: require("./img/3.jpg") },
  { id: 4, src: require("./img/4.jpg") }
];

function App() {
  return (
    <div className={styles.app}>
      <PlayerInfo player={{ id: 1, name: "Player 1" }} />
      <Board cards={dummyCards} />
      <PlayerInfo player={{ id: 2, name: "Player 2" }} />
    </div>
  );
}

export default App;
