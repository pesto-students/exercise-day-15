import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';


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

    const colorRoutes = () => {
      return this.state.colors.map((color) => {
        return <Route key={color.hex} path={`/colors/${color.name}`} render={() => <Color color={color} />} />;
      });
    };

    const newColorComponent = props => (
      <NewColor history={props.history} addColor={this.handleAdd} />
    );

    return (
      <Switch>
        <Route exact path="/colors" render={colorListComponent} />
        {colorRoutes()}
        <Route path="/colors/new" render={newColorComponent} />
        <Redirect to="/colors" />
      </Switch>
    );
  }
}

export default App;
