import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
        <div className="ui stackable borderless five item menu">
          <div>LOGO Will Go HERE </div>
          <Link to="home" className="item">Home </Link>
          <Link to="about" className="item">About </Link>
          <Link to="brews" className="item">Brews </Link>
          <Link to="contact" className="item">Contact </Link>
        </div>
    )
  }
}

export default NavBar;
