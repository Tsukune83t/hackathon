import React, { Component } from 'react';
import './App.css';
import Content from './components/content/Content.jsx';
import Routeur from './components/Routeur';
import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';

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
