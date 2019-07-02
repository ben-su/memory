import "jest-dom/extend-expect";
import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Anchor } from "./Anchor";

afterEach(cleanup);

test("loads and displays greeting", async () => {
  const text = "Wuhu";
  const { getByTestId } = render(
    <Anchor text={text} clickHandler={() => alert("yay")} />,
  );

  // @ts-ignore
  expect(getByTestId("a")).toHaveTextContent(text);
});
