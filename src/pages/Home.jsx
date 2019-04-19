import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import Fiche from '../components/content/Card/fiche';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <div>

        <div className="container-fluid backg">

          <MyNavbar />
          <Container>
          <Row>
            <Col sm="12">
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
              </Card>
            </Col>
          </Row>
          </Container>
        <Container>
          <Row>
            <Col sm="6">
          <Row>
            <Col sm="6">
              <Fiche color="danger"
                
              />
            </Col>
          </Row>
          </Col>
          </Row>
          </Container>

        </div>
      </div>
    );
  }
}