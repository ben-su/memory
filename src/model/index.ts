import cards, { CardsModel } from "./cards";
import players, { PlayersModel } from "./players";

export interface StoreModel {
  cards: CardsModel;
  players: PlayersModel;
}

const model: StoreModel = {
  cards,
  players,
};

export default model;
