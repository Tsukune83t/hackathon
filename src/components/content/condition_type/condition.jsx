import React, { Component } from 'react';

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egg: 0
    };
    this.addEgg = this.addEgg.bind(this)
  }
  addEgg() {
    this.setState(state => ({
      egg: state.egg + 1 
    }));
  }
  render() {
    return (
      <div>
        <p>A cliqué {this.state.egg} fois</p>
        <button onClick={this.addEgg}>Click</button>
      </div>
    )
  }
}

export default Condition