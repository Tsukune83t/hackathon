import React, { Component } from 'react';
import { Row, Col ,Container} from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './que.css';
import { Button } from 'reactstrap';
export default class Quete extends Component {
  render() {
    return (
  
      <Container>

        <MyNavbar />

        <div  className="corps">
          <Row className="title" >
            <Col sm="12">bonjour </Col>
          </Row >
          <Row className="centre">
            <Col sm="6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </Col>
     
            <Col sm="6">  <img src="https://la-cascade.io/content/images/2015/06/kiwi.svg" thumbnail/> </Col>
          </Row>
          <Row className="pied">
            <Col sm="12">
              <Button outline color="warning">warning</Button>{' '}
            
            </Col>
          </Row>
        </div>

      </Container>
   
    );
  }
}

