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
import WineShow from './components/wineShow.js.jsx'


class App extends Component {

  componentDidMount() {
    this.props.loadWines();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/wines" component={WinesPage} />
          <Route exact path="/stores" component={StoresPage} />
          <Route path="/wines/:wineId" component={WineShow} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    winesData: state.wines, 
    storesData: state.stores
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWines: loadWines
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
