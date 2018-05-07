import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { Navbar } from './components/navbar.js.jsx';
import { Home } from './components/home.js.jsx';
import WineList from './components/wineList.js.jsx';


class App extends Component {

  componentDidMount() {

  }

  render() {
    let david = this.props.wineData
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route 
            exact path="/wines" 
            render={(david) => <WineList wineData={david}/>} 
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wineData: state.wines
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default App;
