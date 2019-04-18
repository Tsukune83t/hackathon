import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';


export default class Home extends Component {
  render() {
    return (
      <div>
       
       
        <div className="container-fluid backg">
        <MyNavbar />
        
          <Row>
            <Col sm="3">
            
            <h1>colonne1</h1>
            </Col>
            <Col sm="6">
            <h1>colonne2</h1>
            </Col>
            <Col sm="3">
            <h1>colonne3></h1>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}