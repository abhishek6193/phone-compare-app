import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { FilterLinks } from "./Filter";

configure({ adapter: new Adapter() });

describe("Testing Filter Container", () => {
  let wrapper;
  it("should render three filter options", () => {
    wrapper = shallow(<FilterLinks />);
    expect(wrapper.find("span")).toHaveLength(3);
    expect(wrapper.find(".badge-success").text()).toEqual("less than ₹10,000");
    expect(wrapper.find(".badge-warning").text()).toEqual("₹10,000 to ₹20,000");
    expect(wrapper.find(".badge-danger").text()).toEqual(
      "greater than ₹20,000"
    );
  });
  it("should render a button to remove all filters", () => {
    wrapper = shallow(<FilterLinks />);
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").text()).toEqual("SHOW All");
  });
});
