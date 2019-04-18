import React from 'react';
import axios from 'axios';
import MyNavbar from '../components/header/Navbar';
export default class PersonList extends React.Component {
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
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    );
  }
}
