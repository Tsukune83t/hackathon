import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './que.css';
import { Button } from 'reactstrap';
import ModalExample from './modalee';
import { ProgressBar } from 'react-step-progress-bar';

export default class Quete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egg: 0,
      callApis: [],
      modalOpen: false
    };
    this.addEgg = this.addEgg.bind(this);
  }



  componentDidMount() {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters')
      .then((res) => {
        const callApis = res.data;
        let randomChars = []
        for (let i = 0; i < 2; i++) {
          let randomChar = callApis[Math.floor(Math.random() * callApis.length)];
          let index = callApis.indexOf(randomChar)
          callApis.splice(index, 1)
          randomChars.push(randomChar)
        }
        this.setState({ callApis: randomChars });
      });
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
      <div>
        <Container>
          <div className="corps">
            <Row className="title" >
              <Col sm="12"><p>A cliqué {this.state.egg} fois</p> </Col>
            </Row >
            <Row className="centre">
              <Col sm="12">Le plus petit des deux?</Col>
              {
                this.state.callApis.map((callApi) => {
                  return (
                    <React.Fragment>
                      <Col sm="6" class="imagee" >
                        <img width="200px" className="h-75 d-inline-block" src={callApi.image} className={`${callApi.name}1`} alt="okk" />
                      </Col>
                    </React.Fragment>
                  )
                })  
              }
            </Row>
            <Row>
              {
                this.state.callApis.map((callApi) => {
                  return (
                  <Col sm="6"> 
                    <Button color="warning" onClick={() => this.toggleModal()} size="lg">{callApi.name}</Button>{this.props.buttonLabel}  
                  </Col>
                  )
                })  
              }
            </Row>
            <Row className="pied">
              <Col sm="12">
                <ModalExample toogleAction={() => this.toggleModal()} isOpen={this.state.modalOpen} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

