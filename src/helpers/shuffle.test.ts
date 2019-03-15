import { shuffleArray } from "./shuffle";

it("works", () => {
  const arr = [1, 2, 3];
  const initialLength = arr.length;
  shuffleArray(arr);
  expect(Array.isArray(arr)).toBe(true);
  expect(arr.length).toEqual(initialLength);
});
