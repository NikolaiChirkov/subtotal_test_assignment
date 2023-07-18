import React from "react";
import { create, act, ReactTestRendererJSON } from "react-test-renderer";
import { Link } from "./index";

it("changes the class when hovered", () => {
  const component = create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  let tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  act(() => {
    tree.props.onMouseLeave();
  });

  tree = component.toJSON() as ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
