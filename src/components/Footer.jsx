import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FaGithub className="logos"/>
      </div>
    );
  }
}

export default Footer ;