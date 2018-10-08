import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Search from "./Search";

configure({ adapter: new Adapter() });

describe("Testing Search Component",()=>{
	let wrapper;
	it('should render a search bar for the user to perform search based on product name',()=>{
		wrapper = shallow(<Search />);
		expect(wrapper.find('input')).toHaveLength(1);
		expect(wrapper.find('input').props().id).toEqual("search");
		expect(wrapper.find('input').props().type).toEqual("text");
		expect(wrapper.find('input').props().placeholder).toEqual("Search By Product Name");
	})
})