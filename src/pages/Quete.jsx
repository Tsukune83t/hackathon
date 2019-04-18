import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './que.css';
import { Button } from 'reactstrap';
import ModalExample from './modalee';

export default class Quete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egg: 0,
      modalOpen: false
    };
    this.addEgg = this.addEgg.bind(this);
  }

  addEgg() {
    this.setState(state => ({
      egg: state.egg + 1
    }));
  }

  toggleModal() {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen
    }));
  }

  render() {
    return (
      <Container>
        <MyNavbar />
        <div className="corps">
          <Row className="title" >
            <Col sm="12"><p>A cliqué {this.state.egg} fois</p> </Col>
          </Row >
          <Row className="centre">
            <Col sm="6">Le plus petit des deux?. </Col>
            <Col sm="6" class="imagee" >  

              <img className="h-75 d-inline-block" src="https://images.innoveduc.fr/easter_hackathon/250px-Mystique11.png" alt="okk" />

            </Col>
          </Row>
          <Row className="question">
            <Col sm="3"> <Button onClick={this.addEgg} color="warning" size="lg">ouiiiii</Button>{' '}</Col>
            <Col sm="3">  <Button color="warning" onClick={() => this.toggleModal()} size="lg">nonnnnn></Button>{this.props.buttonLabel}  </Col>
            <Col sm="6">    </Col>
          </Row>
          <Row className="pied">
            <Col sm="12">
              <ModalExample toogleAction={() => this.toggleModal()} isOpen={this.state.modalOpen} />
             
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

