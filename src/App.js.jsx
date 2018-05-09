import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { NavBar } from './components/navbar.js.jsx';
import { Home } from './components/home.js.jsx';
import { loadWines } from './actions/actions';
import WinesPage from './containers/winesPage.js.jsx';
import StoresPage from './containers/storesPage.js.jsx';
import WinePage from './components/winePage.js.jsx'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/wines" component={WinesPage} />
          <Route exact path="/stores" component={StoresPage} />
          <Route exact path="/wines/:wineId" component={WinePage} />
        </div>
      </Router>
    );
  }
}

export default App;
