import React from "react";
import renderer from "react-test-renderer";
import { WithLoader } from "../WithLoader";

it("component changes corresponding to data loading", () => {
  const component = renderer.create(
    <WithLoader isLoading={true}>test</WithLoader>
  );
  
  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.isLoading = false;
  });

  tree = component.toJSON() as renderer.ReactTestRendererJSON;

  renderer.act(() => {
    tree.props.isLoading = true;
  });

  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
