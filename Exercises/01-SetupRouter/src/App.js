import React, { Component, Fragment } from 'react';

import { Route, Link } from 'react-router-dom';

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
        <Link to="/home">
          <Home />
        </Link>
        <Link to="/about">
          <About />
        </Link>
        <Link to="/contact">
          <Contact />
        </Link>

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

      </Fragment>
    );
  }
}

export default App;
