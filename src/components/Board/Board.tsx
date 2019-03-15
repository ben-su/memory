import React, { useEffect, useRef } from "react";
import styles from "./Board.module.scss";
import { TCard } from "../../types";
import { Card } from "../Card/Card";
import { useActions, useStore } from "../../store";

interface Props {
  cards: TCard[];
}

export const Board: React.FC<Props> = ({ cards }: Props) => {
  const switchPlayers = useActions(actions => actions.players.switch);
  const score = useActions(actions => actions.players.addScore);
  const selectedCards = useStore(state => state.cards.selectedItems);
  const clearedCards = useStore(state => state.cards.clearedItems);
  const clearedCardsCount = useRef(0);
  useEffect(() => {
    if (selectedCards.length === 2) switchPlayers(null);
    if (clearedCardsCount.current !== clearedCards.length) {
      clearedCardsCount.current += 2;
      score(null);
    }
  });
  return (
    <div className={styles.board}>
      {cards.map(c => (
        <Card card={c} key={c.id} />
      ))}
    </div>
  );
};
