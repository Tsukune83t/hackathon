import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Cuisine from '../pages/Cuisine';
import Quete from '../pages/Quete';

export default class Routeur extends Component {

  render() {
    return (
     
      <div className="App">
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quete" component={Quete} />
          <Route path="/cuisine" component={Cuisine} />
          <Route path="/contact" component={Contact} />
        </Switch>
        
      </div>
  
    );
  }
}

