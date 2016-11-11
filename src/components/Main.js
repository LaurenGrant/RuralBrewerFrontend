import React, { Component } from 'react';

class Main extends Component {
  render() {
    return(
      <div>
        <div id="heroHome" className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main;
