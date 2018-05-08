import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { Navbar } from './components/navbar.js.jsx';
import { Home } from './components/home.js.jsx';
import WineList from './components/wineList.js.jsx';
import StoreList from './components/storeList.js.jsx';


class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route 
            exact path="/wines" 
            render={() => <WineList winesData={this.props.winesData}/>} 
          />
          <Route 
            exact path="/stores" 
            render={() => <StoreList storesData={this.props.storesData}/>} 
          />
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

  }, dispatch);
};

export default connect(mapStateToProps)(App);
