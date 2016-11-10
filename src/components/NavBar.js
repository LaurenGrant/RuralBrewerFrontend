import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <div className="ui stackable borderless five item menu">
          <a className="item">LOGO Will Go HERE</a>
          <a className="item">Home</a>
          <a className="item">About</a>
          <a className="item">Brews</a>
          <a className="item">Contact</a>
        </div>
    )
  }
}

export default NavBar;
