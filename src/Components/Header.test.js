import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "./Header";

configure({ adapter: new Adapter() });

describe("Testing Header Component", () => {
  let wrapper;
  it("should disable the compare and reset button if badgeNumber prop is less than 1", () => {
    wrapper = shallow(<Header badgeNumber={0} />);
    expect(wrapper.find("button").map(node => node.prop("disabled"))).toEqual([
      true,
      true
    ]);
  });
  it("should enable the reset button if badgeNumber prop is greater than or equal to 1", () => {
    wrapper = shallow(<Header badgeNumber={1} />);
    expect(wrapper.find(".btn-warning").prop("disabled")).toEqual(false);
    expect(wrapper.find(".btn-success").prop("disabled")).toEqual(true);
  });
  it("should enable the compare button if badgeNumber prop is greater than or equal to 2", () => {
    wrapper = shallow(<Header badgeNumber={2} />);
    expect(wrapper.find(".btn-success").prop("disabled")).toEqual(false);
  });
  it("should render the correct value of badgeNumber prop", () => {
    wrapper = shallow(<Header badgeNumber={4} />);
    expect(wrapper.find(".badge").text()).toEqual("4");
  });
});
