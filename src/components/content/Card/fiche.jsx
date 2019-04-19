import React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Row, Col, Card, Container,CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import './fiche.css';
=======
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
>>>>>>> 2a74224f5264e2f53c6ce2823f5322b51b545883

export default class Fiche extends React.Component {
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

<<<<<<< HEAD
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
=======
          <Card>
            <CardHeader>Featured</CardHeader>
            { this.state.persons.filter(person => person.id =='5cac51240d488f0da6151c31' || person.id =='5cac51240d488f0da6151c3a'  ).map((person) => 
     
              <CardBody>
                <CardTitle>{person.name}</CardTitle>
                <CardText>
                  <img src={person.image} />
                </CardText>
                <Button>Go somewhere</Button>
              </CardBody>
>>>>>>> 2a74224f5264e2f53c6ce2823f5322b51b545883

            )}
          </Card>

<<<<<<< HEAD
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
    );
  }
}
=======
        </div>
     
      );
    }
}

>>>>>>> 2a74224f5264e2f53c6ce2823f5322b51b545883
