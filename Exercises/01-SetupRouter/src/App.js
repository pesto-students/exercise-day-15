import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

export const NoMatch = () => <h2>404</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Fragment>
        </div>
      </Router>
    );
  }
}

export default App;
