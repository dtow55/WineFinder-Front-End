import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWines } from '../actions/actions';
import WineList from '../components/wineList.js.jsx';

class WinePage extends Component {

  componentDidMount() {
    this.props.loadWines();
  }

  render() {
    return (
      <WineList wines = {this.props.wines}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wines: state.wines, 
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWines: loadWines
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WinePage);