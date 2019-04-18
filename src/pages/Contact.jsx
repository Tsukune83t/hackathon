import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './con.css';
export default class compte extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',

    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
   
    });
  }
  
  submitForm(e) {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };

    const url = 'http://localhost:3000/authors';
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error ) {
          alert('le champ name doit etre non vide');
        } else {
          alert(`Film ajouté avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un Film ');
      });

  }
  
  render() {
    return (
      <div >
        <Form className="detailsforms" onSubmit={this.submitForm}>
          <FormGroup row>
            <Label for="username" sm={2}>Email</Label>
            <Col sm={10}>
              <Input 
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}
                value={this.state.username} />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="title" sm={2}>title</Label>
            <Col sm={10}>
              <Input 
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title} />
            </Col>
          </FormGroup>
         
          <FormGroup >
            <Col sm={{ size: 10, offset: 2 }}>
              <Button  type="submit" value="Envoyer" >Submit</Button>
            </Col>
          </FormGroup> </Form>

      </div>
    );
  }
}
