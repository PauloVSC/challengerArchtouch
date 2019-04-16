import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar.js'
import Movie from './components/Movie/Movie.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Movie/>
      </div>
    );
  }
}

export default App;
