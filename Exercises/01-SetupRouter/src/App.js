import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Link to="/home"><Home /></Link>
          <Link to="/About"><About /></Link>
          <Link to="/Contact"><Contact /></Link> */}
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
