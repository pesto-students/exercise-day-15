import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Error404 from './components/Error404';


const MyRoutes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Contact" component={Contact} />
      <Route path="/About" component={About} />
      <Route component={Error404} />
    </Switch>
  </main>
);

export default MyRoutes;
