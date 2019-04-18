import React, { Component } from 'react';
import './App.css';
import Content from './components/content/Content.jsx'
import Routeur from './components/Routeur';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <React.Fragment>
          <Routeur />
        </React.Fragment>
        <Footer />
      </div>
    );
  }
}

export default App;
