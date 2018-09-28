import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { App, NoMatch } from '../../src/App';

test('invalid path should redirect to 404', () => {
  const wrapper = mount(<MemoryRouter initialEntries={['/random']}><App /></MemoryRouter>);
  // expect(wrapper.find(NoMatch)).toHaveLength(0);
  expect(wrapper.find(NoMatch)).toHaveLength(1);
});
