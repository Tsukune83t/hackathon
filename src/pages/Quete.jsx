import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './que.css';
import { Button } from 'reactstrap';
import ModalExample from './modalee';

const availableDatas = {
  name: 'Quel est le nom de ce personnage ?',
  origin: "Quel est l'origine de ce personnage",
  species: 'De quelle espece est ce personage',
  gender: 'Quel est son sexe'
}

const availableKeys = ['name', 'origin','species','gender']

export default class Quete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      egg: 0,
      callApis: [],
      modalOpen: false,
      currentSelectedChar: {
        name: '',
        origin: '',
        species: '',
        gender: '',
      },
      currentQuestion: 'name'
    };
    this.addEgg = this.addEgg.bind(this);
  }



  componentDidMount() {
    this.fetchNewQuestion()
  }

  fetchNewQuestion() {
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
        const currentQuestion = availableKeys[Math.floor(Math.random() * availableKeys.length)]
        this.setState({ callApis: randomChars, currentSelectedChar: randomChars[Math.floor(Math.random() * randomChars.length)], currentQuestion });
      });
  }

  checkIfValidResponse(response) {
    if (this.state.currentSelectedChar[this.state.currentQuestion] === response) {
      alert('Bonne réponse')
      this.addEgg()
    } else {
      alert('Mauvaise réponse !')
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
    return (
      <div>
        <Container>
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
                  if (idx >= 1) {
                    return null
                  }
                  return (
                    <React.Fragment>
                      <Col sm="12" class="imagee" >
                        <img className="h-75 d-inline-block" src={callApi.image} className={`${callApi.name}1`} alt="okk" />
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
                    <Col sm="6">
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

