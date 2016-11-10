import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="ui inverted vertical footer segment">
          <div
            className="
            ui stackable three column center aligned grid container"
          >
            <div className="column"></div>
            <div className="column">
              <p>© 2016 The Rural Brewer Beer Company</p>
            </div> {/* End column */}
            <div className="column">
              <p>Contact: </p>
              <p>Phone</p>
              <p>Address</p>
              <p>Email</p>
            </div> {/* End column */}
          </div> {/* End grid */}
        </div> {/* End segment */}
      </footer>
    )
  }
}

export default Footer;
