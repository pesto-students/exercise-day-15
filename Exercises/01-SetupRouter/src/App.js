import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />


        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Fragment>

    );
  }
}

export default App;
