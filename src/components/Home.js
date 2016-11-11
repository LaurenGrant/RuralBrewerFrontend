import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div id="heroHome" className="ui middle aligned one column centered grid">
        <div className="row">
          <div className="column">
            <h1 className="whiteText">Welcome</h1>
          </div> {/* End column */}
        </div> {/* End row */}
      </div>
    )
  }
}

export default Home;
