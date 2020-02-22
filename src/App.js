import React from 'react';
import Home from './components/Home';
import Beers from './components/Beers';
import Newbeer from './components/New-beer';
import BeerDetails from './components/BeerDetails';

import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beer/:id" component={BeerDetails} />
        <Route
          exact
          path="/random-beer"
          render={props => <BeerDetails isRandom {...props} />}
        />
        <Route exact path="/new-beer" component={Newbeer} />
      </Switch>
    </div>
  );
}

export default App;
