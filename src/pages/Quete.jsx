import React, { Component } from 'react';
import { Row, Col ,Container} from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './que.css';
import { Button } from 'reactstrap';

export default class Quete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egg: 0
    };
    this.addEgg = this.addEgg.bind(this);
  }

  addEgg() {
    this.setState(state => ({
      egg: state.egg + 1 
    }));
  }

  render() {
    return (
  
      <Container>

        <MyNavbar />

        <div  className="corps">
          <Row className="title" >
            <Col sm="12"><p>A cliqué {this.state.egg} fois</p> </Col>
          </Row >
          <Row className="centre">
            <Col sm="6">Le plus petit des deux?. </Col>
     
            <Col sm="6">  <img src="https://images.innoveduc.fr/easter_hackathon/6438864-dc94c42f-acac-44ff-8804-85a37f06262d.jpeg" thumbnail/> </Col>

          </Row>
          <Row className="question">

            <Col sm="3"> <Button onClick={this.addEgg} color="warning" size="lg">Large Button</Button>{' '}</Col>
     
            <Col sm="3">  <Button color="warning" size="lg">Large Button</Button>{' '}  </Col>
            <Col sm="6">    </Col>
          </Row>
          <Row className="pied">
            <Col sm="12">
            
            </Col>
          </Row>
        </div>

      </Container>
   
    );
  }
}

