import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="./components/About" component={About} />
      <Route path="./components/Contact" component={Contact} />
    </Switch>
  </main>
);
