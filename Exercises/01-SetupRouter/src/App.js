import React, { Component, Fragment } from 'react';
import Main from './components/Main';

import './styles/App.css';
import Navbar from './components/Navbar';

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
