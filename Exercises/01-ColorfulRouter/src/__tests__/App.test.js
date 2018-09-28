import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import ColorList from '../components/ColorList';
import Color from '../components/Color';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><App /></MemoryRouter>, div);
});

describe('Valid routes', () => {
  it('should render <ColorList /> for `/colors`', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/colors']}><App /></MemoryRouter>);
    expect(wrapper.find(ColorList).length).toBe(1);
  });

  it('should redirect <ColorList /> to for `/not-found`', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/not-found']}><App /></MemoryRouter>);
    expect(wrapper.find(ColorList).length).toBe(1);
  });
});

describe('<Color />', () => {
  it('should display color name in first <p />', () => {
    const props = {
      color: {
        name: 'red',
        hex: '#FF0000',
      },
    };
    const wrapper = shallow(<Color color={props.color} />);
    expect(wrapper.find('p').first().text()).toBe(`this is ${props.color.name}.`);
  });

  it('should apply as a backgroud color on the wrapping <div />', () => {
    const props = {
      color: {
        name: 'red',
        hex: '#FF0000',
      },
    };
    const wrappingDiv = shallow(<Color color={props.color} />).find('div').first();
    expect(wrappingDiv.props().style.backgroundColor).toBe(props.color.hex);
  });

  it('should have a link to `/colors`', () => {
    const props = {
      color: {
        name: 'red',
        hex: '#FF0000',
      },
    };
    const wrapper = shallow(<Color color={props.color} />);
    expect(wrapper.find('Link').props().to).toBe('/colors');
  });
});
