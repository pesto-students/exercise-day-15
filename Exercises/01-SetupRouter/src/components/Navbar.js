import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink data-testid="home" to="/home" activeClassName="active">Home</NavLink>
        </li>
        <li><NavLink data-testid="about" to="/about" activeClassName="active">About Us</NavLink></li>
        <li><NavLink data-testid="contact" to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    );
  }
}
