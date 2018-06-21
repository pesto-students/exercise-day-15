import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Main from './components/Route';
import './styles/App.css';
import ColorList from './components/ColorList';
// import Color from './components/Color';
// import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const colorListComponent = () => (
      <div>
        <Main />
        <ColorList colors={this.state.colors} />
      </div>
    );

    return (
      colorListComponent()
    );
  }
}

export default App;
