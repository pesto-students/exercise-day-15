import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

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
            <li>
              <NavLink exact to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
