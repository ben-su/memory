import React from "react";
import styles from "./PlayerInfo.module.scss";
import { TPlayer } from "../types";

interface Props {
  player: TPlayer;
}

export const PlayerInfo: React.FC<Props> = ({ player }: Props) => {
  return (
    <div className={styles.playerInfo}>
      <div className={styles.name}>{player.name}</div>
    </div>
  );
};
