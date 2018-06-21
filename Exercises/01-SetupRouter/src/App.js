import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Content from './components/Content';


import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Navbar />
          {/* <Home />
          <About />
          <Contact /> */}
        </Fragment>
        <Content />
      </div>
    );
  }
}

export default App;
