import { TCard } from "../types";
import React, { useRef } from "react";
import styles from "./Card.module.scss";

interface Props {
  card: TCard;
}

export const Card: React.FC<Props> = ({ card }: Props) => {
  const rotationValue = useRef(Math.random() * 20 - 10);

  return (
    <div
      className={styles.card}
      style={{ transform: `rotate(${rotationValue.current}deg)` }}
    >
      <div className={styles.inner}>
        <div className={styles.front}>
          <div className={styles.pattern} />
        </div>
        <div className={styles.back}>
          <img className={styles.img} alt={card.src} src={card.src} />
        </div>
      </div>
    </div>
  );
};
