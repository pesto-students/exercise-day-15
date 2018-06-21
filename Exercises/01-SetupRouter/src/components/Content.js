import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';


const Content = () => (
  <content>
    <Switch >
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Switch>
  </content>
);

export default Content;
