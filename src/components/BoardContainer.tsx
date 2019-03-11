import React, { useEffect } from "react";
import styles from "./BoardContainer.module.scss";
import { useActions, useStore } from "../store";
import { TCard } from "../types";
import { PlayerInfo } from "./PlayerInfo";
import { Board } from "./Board";
import { shuffleArray } from "../helpers/shuffle";

const BoardContainer: React.FC = () => {
  // Pull out state from our store
  const cards = useStore(state => state.cards.items);
  const players = useStore(state => state.players.items);
  // Gets redux action
  const addCard = useActions(actions => actions.cards.add);

  // initialize
  useEffect(() => {
    // generate random cards
    const cards: TCard[] = [];
    const ids: number[] = [];
    while (cards.length < 24) {
      const id = Math.round(Math.random() * 85);
      if (!ids.includes(id)) {
        ids.push(id);
        cards.push({
          id: id.toString(),
          src: require(`./../img/${id}.jpg`),
          pairId: id
        });
        cards.push({
          id: id.toString() + "_2",
          src: require(`./../img/${id}.jpg`),
          pairId: id
        });
      }
    }
    shuffleArray(cards);
    cards.forEach(c => addCard(c));
  }, []);

  return (
    <div className={styles.app}>
      <PlayerInfo player={players[0]} />
      <Board cards={cards} />
      <PlayerInfo player={players[1]} end={true} />
    </div>
  );
};

export default BoardContainer;
