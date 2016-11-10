import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';
import About from './components/About';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
