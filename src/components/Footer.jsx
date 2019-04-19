import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NavItem>
          <NavLink href="https://github.com/Tsukune83t/hackathon"></NavLink>
        </NavItem>
        
      </div>
    );
  }
}

export default Footer;