import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavItem>
          <NavLink href="https://github.com/Tsukune83t/hackathon"><FaGithub className="logos" /></NavLink>
        </NavItem>
        
      </div>
    );
  }
}

export default Footer;