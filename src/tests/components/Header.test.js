//react-test-renderer
import React from "react";
import { shallow } from 'enzyme';
import Header from "../../components/Header";

//snapshot
test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  // expect(wrapper.find('h1').text()).toBe(`Expensify`);
  expect(wrapper).toMatchSnapshot();
});