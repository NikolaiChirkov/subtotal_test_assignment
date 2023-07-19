import React from "react";
import renderer from "react-test-renderer";
import { Switch } from "../Switch";

it("options changes classes when clicked", () => {
  const component = renderer.create(
    <Switch
      options={[
        { title: "Latest first", value: "asc", default: false },
        { title: "Newest first", value: "desc", default: true },
      ]}
      onOptionChange={(value) => console.log(value)}
    />
  );
  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.children[0].props.onClick();
  });

  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.children[1].props.onClick();
  });
  
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
