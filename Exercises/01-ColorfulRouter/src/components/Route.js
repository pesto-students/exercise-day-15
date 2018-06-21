import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewColor from './NewColor';

const main = () => (
  <div>
    <Switch>
      <Route exact path="/colors/new" component={NewColor} />
      <Route exact path="/colors/:color" />
    </Switch>
  </div>
);
export default main;
