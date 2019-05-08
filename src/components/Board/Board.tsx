import React, { useEffect, useRef } from "react";
import { useActions, useStore } from "../../store";
import { TCard } from "../../types";
import { Card } from "../Card/Card";
import styles from "./Board.module.scss";

interface Props {
  cards: TCard[];
}

export const Board: React.FC<Props> = ({ cards }: Props) => {
  const switchPlayers = useActions((actions) => actions.players.switch);
  const score = useActions((actions) => actions.players.addScore);
  const selectedCards = useStore((state) => state.cards.selectedItems);
  const clearedCards = useStore((state) => state.cards.clearedItems);

  const clearedCardsCount = useRef(0);

  useEffect(() => {
    // switch players when 2 cards are selected and not matching
    if (selectedCards.length === 2) { switchPlayers(); }
    // add 1 to score of current player if we have new cleared cards
    if (clearedCardsCount.current !== clearedCards.length) {
      clearedCardsCount.current += 2;
      score();
    }
  });

  return (
    <div className={styles.board}>
      {cards.map((c) => (
        <Card card={c} key={c.id} />
      ))}
    </div>
  );
};
