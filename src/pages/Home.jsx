import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import Fiche from '../components/content/Card/fiche';
import Probar from '../components/header/Progressbar';
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
          <Probar value={75} />
          <Container>
            <Row>
              <Col>
                <Fiche/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}