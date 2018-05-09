import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWines } from '../actions/actions';
import WineList from '../components/wineList.js.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import wineShow from '../components/wineShow.js.jsx'

class WinesPage extends Component {

  componentDidMount() {
    this.props.loadWines();
  }

  render() {
    return (
      <div>
        <WineList wines = {this.props.wines}/>
        <Route exact path={`${this.props.match.url}/:wineId`} component={wineShow} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    wines: state.wines, 
    match: ownProps.match
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWines: loadWines
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WinesPage);