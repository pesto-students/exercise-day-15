import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Main from './components/main';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Main />
      </Fragment>
    );
  }
}

export default App;
