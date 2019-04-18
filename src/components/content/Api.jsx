import React, { Component } from 'react';
import axios from 'axios';
const baseUrl = 'http://easteregg.wildcodeschool.fr';
const images = '/api/characters';



export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callApiImages:[]
    }
  }
  componentDidMount() {
    axios.get(`${baseUrl}${images}`)
      .then((res) => {        
        this.setState({ callApiImages: res.data })
      });

  }
  render() {
    return (
      <div>
        {
          this.state.callApiImages.map((callApiImage) => {
          return (
            <div>
              <img src={callApiImage.image} />
            </div>
          );
        })
        }

      </div>
    );
  }

}