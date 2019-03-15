import { action, Action } from "easy-peasy";
import { TPlayer } from "../types";

export interface PlayersModel {
  items: TPlayer[];
  selectedPlayer: TPlayer;
  switch: Action<PlayersModel>;
  addScore: Action<PlayersModel>;
}

const defaultItems: TPlayer[] = [
  { id: 1, name: "Spieler 1", score: 0 },
  { id: 2, name: "Spieler 2", score: 0 }
];

const players: PlayersModel = {
  items: defaultItems,
  selectedPlayer: defaultItems[0],
  switch: action(state => {
    const currentlySelectedId = state.selectedPlayer.id;
    const otherPlayer = state.items.find(p => p.id !== currentlySelectedId);
    if (otherPlayer) state.selectedPlayer = otherPlayer;
  }),
  addScore: action(state => {
    const player = state.items.find(p => p.id === state.selectedPlayer.id);
    if (player) player.score++;
  })
};

export default players;
