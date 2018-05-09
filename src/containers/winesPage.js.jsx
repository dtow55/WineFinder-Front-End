import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWines } from '../actions/actions';
import WineList from '../components/wineList.js.jsx';

class WinesPage extends Component {

  componentDidMount() {
    this.props.loadWines();
  }

  render() {
    console.log(`${this.props.match.url}/:wineId`);
    return (
      <Router>
      <div>
        <WineList wines = {this.props.wines}/>
      </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wines: state.wines
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWines: loadWines
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WinesPage);