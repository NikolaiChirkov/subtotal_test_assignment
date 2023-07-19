import { concatClassNames } from "./concatClassNames";

it("classNames concat correctly", () => {
  const className = concatClassNames(["boop", "woop", null, false]);

  expect(className).toEqual("boop woop");
});
