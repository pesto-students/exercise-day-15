import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Color from '../components/Color';
import ColorList from '../components/ColorList';
import NewColor from '../components/NewColor';


const Routes = () => (
  <Switch>
    <Route path="/colors/colors" component={Color} />
    <Route path="/colors/colorList" component={ColorList} />
    <Route path="/colors/newColor" component={NewColor} />
  </Switch>
);

export default Routes;
