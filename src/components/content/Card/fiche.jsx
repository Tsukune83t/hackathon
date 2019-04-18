import React from 'react';
import axios from 'axios';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

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

            )}
          </Card>

        </div>
     
      );
    }
}

