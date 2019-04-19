import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './que.css';
import { Button } from 'reactstrap';
import ModalExample from './modalee';
import { ProgressBar } from 'react-step-progress-bar';

const availableDatas = {
  name: 'Quel est le nom du ce personnage ?',
  origin: "Quel est l'origine de ce personnage",
}

const availableKeys = ['name', 'origin']

export default class Quete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egg: 0,
      callApis: [],
      modalOpen: false,
      currentSelectedChar: {
        name: '',
        origin: ''
      },
      currentQuestion: 'name'
    };
    this.addEgg = this.addEgg.bind(this);
  }



  componentDidMount() {
    this.fetchNewQuestion()
  }

  fetchNewQuestion(){
    axios.get('http://easteregg.wildcodeschool.fr/api/characters')
      .then((res) => {
        const callApis = res.data;
        let randomChars = []
        for (let i = 0; i < 2; i++) {
          let randomChar = callApis[Math.floor(Math.random() * callApis.length)];
          let index = callApis.indexOf(randomChar)
          randomChars.push(randomChar)
          callApis.splice(index, 1)
        }
        const currentQuestion = availableKeys[Math.floor(Math.random() * availableKeys.length)]
        const randomChar =  randomChars[Math.floor(Math.random() * randomChars.length)]
        this.setState({ callApis: randomChars, currentSelectedChar: randomChar, currentQuestion});
      });
  }

  checkIfValidResponse(response){
    if(this.state.currentSelectedChar[this.state.currentQuestion] === response){
      alert('Bonne réponse')
      this.addEgg()
    } else {
      this.toggleModal()
    }
    this.fetchNewQuestion()
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
    console.log(this.state);
    return (
      <div>
        <Container>
          <p>{this.state.currentSelectedChar[this.state.currentQuestion]}</p>
          <div className="corps">
            <Row className="title" >
              <Col sm="12"><p>A cliqué {this.state.egg} fois</p> </Col>
            </Row >
            <Row className="centre">
              <Col sm="12">
                {
                  availableDatas[this.state.currentQuestion]
                }
              </Col>
              {
                this.state.callApis.map((callApi, idx) => {
                  if (callApi.name !== this.state.currentSelectedChar.name){
                    return null
                  }
                  return (
                    <React.Fragment key={callApi.name}>
                      <Col sm="12" class="imagee" >
                        <img max-height="200px" className="h-75 d-inline-block" src={callApi.image} className={`${callApi.name}1`} alt="okk" />
                      </Col>
                    </React.Fragment>
                  )
                })  
              }
            </Row>
            <Row className="pied">
              {
                this.state.callApis.map((callApi) => {
                  return (
                  <Col sm="6" key={callApi.id}> 
                    <Button color="warning" onClick={() => this.checkIfValidResponse(callApi[this.state.currentQuestion])} size="lg">{callApi[this.state.currentQuestion]}</Button>  
               
                  </Col>
                  )
                })  
              }
            </Row>
    
          </div>
        </Container>
      </div>
    )
  }
}

