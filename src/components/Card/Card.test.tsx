import { StoreProvider } from "easy-peasy";
import "jest-dom/extend-expect";
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import store from "../../store";
import { TCard } from "../../types";
import { Card } from "./Card";

afterEach(cleanup);
beforeAll(() => {
  const c: TCard = {
    id: "1",
    src: require(`./../../img/1.jpg`),
    pairId: 1,
  };

  store.dispatch.cards.add(c);
});

test("display card and flip", () => {
  const { getByTestId } = render(
    <StoreProvider store={store}>
      <Card card={store.getState().cards.items[0]} />
    </StoreProvider>,
  );

  // @ts-ignore
  expect(getByTestId("img")).toHaveAttribute("src");
  const card = getByTestId("card");
  expect(card).not.toHaveClass("flipped");
  fireEvent.click(card);
  expect(card).toHaveClass("flipped");
});
