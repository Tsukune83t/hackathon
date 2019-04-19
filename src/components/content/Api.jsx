import React, { Component } from 'react';
import axios from 'axios';
const baseUrl = 'http://easteregg.wildcodeschool.fr';
const characterInfo = '/api/characters/5cac51240d488f0da6151c33';



export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callApiImages:[],
      currentCharacter: {}
    }
  }
  componentDidMount() {
    axios.get(`${baseUrl}${characterInfo}`)
      .then((res) => {        
        this.setState({ currentCharacter: res.data })
      });

  }
  render() {
    console.log("hererererer", this.state)
    return (
      <div>
        <h1>{this.state.currentCharacter.name}</h1>
        <img src={this.state.currentCharacter.image} />
        

      </div>


    );
  }

}