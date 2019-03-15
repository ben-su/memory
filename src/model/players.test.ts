import store from "../store";

test("addScore action", () => {
  expect(store.getState().players.items[0].score).toBe(0);
  store.dispatch.players.addScore(null);
  expect(store.getState().players.items[0].score).toBe(1);
});
