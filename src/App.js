import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
