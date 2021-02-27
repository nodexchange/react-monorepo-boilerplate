import React from "react";
import renderer from "react-test-renderer";
import { Demo } from "../src/index";

describe("Button", () => {
  it("should render some text", () => {
    const args = { text: "foobar" };
    const component = renderer.create(<Demo {...args} />);
    const tree = component.toJSON();

    expect(tree.type).toEqual("div");
    expect(tree.children).toEqual(["foobar"]);
  });
});