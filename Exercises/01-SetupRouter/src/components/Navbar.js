import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/About">About</Link></li>
      </div>
    );
  }
}
