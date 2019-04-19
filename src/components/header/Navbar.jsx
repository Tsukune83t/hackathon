
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="warning" light expand="md">
      
          <NavLink  className='nav-link' to="/"> Home </NavLink> <span class="sr-only">(current)</span>

          <NavLink className='nav-link' to="/Quete/90"> Quete </NavLink>
       
          <NavLink className='nav-link' to="/contact"> Contact </NavLink>

  
        </Navbar>
      </div>
    );
  }
}