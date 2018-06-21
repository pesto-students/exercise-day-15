import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path=".About" component={About} />
      <Route path="./Contact" component={Contact} />
    </Switch>
  </main>
);
export default Main;
