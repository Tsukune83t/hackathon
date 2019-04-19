import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import Fiche from '../components/content/Card/fiche';
import Probar from '../components/header/Progressbar';

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="container-fluid backg">

        <MyNavbar />
        <Container>
          <Row>
            <Fiche color="danger" />
          </Row>
        </Container>

      </div>

    );
  }
}