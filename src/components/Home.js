import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="heroHome" className="ui middle aligned one column centered grid">
        <div className="row">
          <div className="column">
            <img className="ui centered circular image" src="http://lorempixel.com/200/200/"></img>
          </div> {/* End column */}
        </div> {/* End row */}
      </div>
    )
  }
}

export default Home;
