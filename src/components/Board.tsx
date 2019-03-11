import React from "react";
import styles from "./board.module.scss";
import { TCard } from "../types";
import { Card } from "./Card";

interface Props {
  cards: TCard[];
}

export const Board: React.FC<Props> = ({ cards }: Props) => {
  return (
    <div className={styles.board}>
      {cards.map(c => (
        <Card card={c} key={c.id} />
      ))}
    </div>
  );
};
