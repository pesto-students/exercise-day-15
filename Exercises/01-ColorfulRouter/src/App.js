import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
// import NewColor from './components/NewColor';
// eslint-disable-next-line
const ColorFound = ({ match }) => {
  const clr = match.params.color;
  const found = this.state.find(o => o.name === clr);
  return <Color color={found} />;
};
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
      <ColorList colors={this.state.colors} />
    );

    return (
      <Route>
        <div>
          <Switch>
            <Route path="/colors" component={colorListComponent}>Home</Route>
            <Route path="/colors/:id" component={ColorFound} />
          </Switch>
        </div>
      </Route>
    );
  }
}

export default App;
