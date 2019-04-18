import React, { Component } from 'react';
import { Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText} from 'reactstrap';
import MyNavbar from '../components/header/Navbar';
import './con.css';

export default class Quete extends Component {
  render() {
    return (
      <div>
       
        <div className="container-fluid backg">
          <MyNavbar />
        
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader ClassName="title" >Header</CardHeader>
                <CardBody>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </CardBody>
                <CardFooter>Footer</CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
