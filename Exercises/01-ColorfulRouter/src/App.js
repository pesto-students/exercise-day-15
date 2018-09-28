import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import NewColor from './components/NewColor';
import Color from './components/Color';

const NewColorWithRouter = withRouter(NewColor);

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
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/colors" exact />
          <Route path="/colors" exact render={() => <ColorList colors={this.state.colors} />} />
          <Route path="/colors/new" exact render={() => <NewColorWithRouter addColor={this.handleAdd} />} />
          <Route path="/colors/:name" render={props => <Color color={this.state.colors.filter(color => color.name === props.match.params.name)[0]} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
