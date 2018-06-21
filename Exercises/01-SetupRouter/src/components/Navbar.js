import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './../components/Home';
import About from './../components/About';
import Contact from './../components/Contact';
import NotFound from './../components/NotFound';


import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
