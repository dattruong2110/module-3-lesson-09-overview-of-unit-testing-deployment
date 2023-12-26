import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("initial value is 0", () => {
    const component = shallow(<App />);
    const expected = "Count: 0";
    const actual = component.find("div.counter-value").text();
    expect(expected).toEqual(actual);
  });
  it("increments count by 1 when the increment button is clicked", () => {
    const component = shallow(<App />);
    const incrementBtn = component.find("button.increment");
    incrementBtn.simulate("click");
    const expected = "Count: 1";
    const actual = component.find("div.counter-value").text();
    expect(expected).toEqual(actual);
  });
  it("descrements count by 1 when the descrements button is clicked", () => {
    const component = shallow(<App />);
    const decrementBtn = component.find("button.decrement");
    decrementBtn.simulate("click");
    const expected = "Count: -1";
    const actual = component.find("div.counter-value").text();
    expect(expected).toEqual(actual);
  });
});
