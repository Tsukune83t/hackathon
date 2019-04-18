import React from 'react';
import axios from 'axios';

import MyNavbar from '../components/header/Navbar';
export default class Cuisine extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div>
        <MyNavbar />
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>

      </div>
    );
  }
}
