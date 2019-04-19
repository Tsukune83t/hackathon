import React, { Component } from 'react';
import './App.css';
import Content from './components/content/Content.jsx';
import Routeur from './components/Routeur';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Header />
          <Content />
          <Routeur />
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
