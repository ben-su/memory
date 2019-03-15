import React from "react";
import styles from "./PlayerInfo.module.scss";
import { TPlayer } from "../../types";
import { useStore } from "../../store";

interface Props {
  player: TPlayer;
  end?: boolean;
}

export const PlayerInfo: React.FC<Props> = ({ player, end }: Props) => {
  const selectedPlayer = useStore(state => state.players.selectedPlayer);
  const isSelected = selectedPlayer.id === player.id;
  return (
    <div
      className={`${styles.playerInfo} ${end ? styles.end : ""} ${
        isSelected ? styles.selected : ""
      }`}
    >
      {player.name} | Punkte: {player.score || 0}{" "}
      {isSelected ? "| Du bist dran!" : ""}
    </div>
  );
};
