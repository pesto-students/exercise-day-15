import { Link } from 'react-router-dom';
import React, { Component } from 'react';


import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    );
  }
}
