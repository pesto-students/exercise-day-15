import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should only display the home component at /', () => {
    const wrapper = mount(<App />);

    expect(wrapper.find('div').text()).toBe('Home Component');
    wrapper.unmount();
  });
});
