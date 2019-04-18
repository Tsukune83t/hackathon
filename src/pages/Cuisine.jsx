import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MyNavbar from '../components/header/Navbar';

export default class Cuisine extends Component {
  render() {
    return (
      <div>
       
        <div className="container-fluid backg">
          <MyNavbar />
        
          <Row>
            <Col sm="3">
            
              <h1>ccuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisssineeeeeee</h1>
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