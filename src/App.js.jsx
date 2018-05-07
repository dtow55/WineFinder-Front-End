import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Navbar } from './components/navbar.js.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
        </div>
      </Router>
    );
  }
}

export default App;
