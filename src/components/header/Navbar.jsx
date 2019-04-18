import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './nav.css';




export default class MyNavbar extends React.Component {
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

        <Nav class="navbar navbar-expand-lg navbar-warning bg-warning">
          <div>  <NavLink  className='nav-link' to="/">
          
            <p className="text-light title-nav">Api-TOP FOUFOU</p>
          </NavLink> </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a>  <NavLink  className='nav-link' to="/"> Home </NavLink> <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a> <NavLink className='nav-link' to="/league"> cuisine </NavLink></a>
              </li>
              <li class="nav-item">
                <a> <NavLink className='nav-link' to="/bet"> divers </NavLink></a>
              </li>
              <li class="nav-item">
                <a> <NavLink className='nav-link' to="/contact"> Contact </NavLink></a>
              </li>
          

            </ul>


          </div>
        </Nav>

      </div>
    );
  }
}