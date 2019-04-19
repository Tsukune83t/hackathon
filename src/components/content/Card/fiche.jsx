import React from 'react';
import axios from 'axios';
import { Row, Col, Card, Container,CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import './fiche.css';

export default class Fiche extends React.Component {
 
    constructor(props) {
    super(props);
    this.state = {
      callApis: []
    }

  }

  componentDidMount() {
    axios.get('http://easteregg.wildcodeschool.fr/api/characters')
      .then((res) => {
        const callApis = res.data;
        this.setState({ callApis });
      });
  }
  render() {
    return (


      <div>
        {this.state.callApis.filter(callApi => callApi.id == '5cac51240d488f0da6151c3d' || callApi.id == '5cac51240d488f0da6151c34' || callApi.id == '5cac51240d488f0da6151c39' || callApi.id == '5cac51240d488f0da6151c4c'  || callApi.id == '5cac51240d488f0da6151c69' || callApi.id == '5cac51240d488f0da6151c68').map((callApi) =>
          
            <Container className={callApi.name}>

            
              <Row className="cards">
                <Col sm="4">                
                  <img bottom width="90%" src={callApi.image} className={`${callApi.name}1`} alt="Card image" />
                </Col>
                <Col sm="8">     
                  <h4>{callApi.name}</h4>                  
                </Col>
              </Row>
            </Container>

          
        )}
      </div>
    )
}}
