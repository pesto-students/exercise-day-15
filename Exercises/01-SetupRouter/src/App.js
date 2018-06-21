import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/home"><Home /></Link>
        <div>
          {/* <Navbar /> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
        <Link to="/About"><About /></Link>
        <Link to="/Contact"><Contact /></Link>
      </div>
    );
  }
}

export default App;
