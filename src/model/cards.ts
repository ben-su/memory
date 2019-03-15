import { action, Action } from "easy-peasy";
import { TCard } from "../types";

export interface CardsModel {
  items: TCard[];
  selectedItems: TCard[];
  clearedItems: TCard[];
  add: Action<CardsModel, TCard>;
  select: Action<CardsModel, TCard>;
}

const cards: CardsModel = {
  items: [],
  selectedItems: [],
  clearedItems: [],
  add: action((state, payload: TCard) => {
    state.items.push(payload);
  }),
  select: action((state, payload: TCard) => {
    if (!state.selectedItems.find(c => c.id === payload.id)) {
      if (state.selectedItems.length === 2) {
        state.selectedItems = [];
        state.selectedItems.push(payload);
      } else if (
        state.selectedItems.length === 1 &&
        state.selectedItems[0].pairId === payload.pairId
      ) {
        state.clearedItems.push(payload);
        state.clearedItems.push(state.selectedItems[0]);
        state.selectedItems = [];
      } else {
        state.selectedItems.push(payload);
      }
    }
  })
};

export default cards;
