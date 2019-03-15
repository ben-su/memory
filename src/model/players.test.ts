import store from "../store";

test("addScore action", async () => {
  const players = store.getState().players;
  expect(players.items[0].score).toBe(0);
  await store.dispatch.players.addScore(null);
  expect(players.items[0].score).toEqual(1);
});
