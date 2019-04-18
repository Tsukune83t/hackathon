import React, { Component } from 'react';
import './App.css';
import Routeur from './components/Routeur';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>

          <Routeur />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
