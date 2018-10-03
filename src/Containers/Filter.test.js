import React from "react";
import thunk from "redux-thunk";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { FilterLinks } from "./Filter";
import { setFilter } from "../Actions";
import { Filters } from "../Constants/actionTypes.js";

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
  // it('should dispatch the SHOW_CHEAP filter',()=>{
  // 	const create = () => {
  //     const store = {
  //       getState: jest.fn(() => ({})),
  //       dispatch: jest.fn(),
  //     }
  //     const next = jest.fn()
  //     const invoke = (action) => thunk(store)(next)(action)
  //     return {store, next, invoke}
  //   }
  //   const { store, invoke } = create()
  //   invoke((dispatch, getState) => {
  //     dispatch('SHOW_CHEAP')
  //     getState()
  //   })
  //   const mockCall=jest.fn();
  //   wrapper = shallow(<FilterLinks onClick={mockCall}/>);
  //   const spy = jest.spyOn(wrapper.instance(), "onClick");
  //    wrapper.instance().forceUpdate();
  //   wrapper.find('ul').childAt(0).simulate('click');
  //   expect(spy).toHaveBeenCalled();
  //   expect(store.getState).toHaveBeenCalled()
  // })
});
