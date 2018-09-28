import React from 'react';
import { shallow } from 'enzyme';
import { NavLink, Redirect } from 'react-router-dom';

import App from '../App';
import Navbar from '../components/Navbar';

describe('<App /> shallow rendering', () => {
  it('should render <Navbar />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Navbar).length).toBe(1);
  });

  it('should redirect to home on first rendering', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Redirect).length).toBe(1);
  });
});

describe('<Navbar /> shallow rendering', () => {
  it('should have 3 <NavLink />', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavLink).length).toBe(3);
  });
});
