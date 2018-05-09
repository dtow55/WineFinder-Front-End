import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWine } from '../actions/actions';

class WinePage extends Component {

  componentDidMount() {
    this.props.loadWine(this.props.wineId);
  }

  render() {
    return (
      <div>
        <h3>{this.props.wine.name}</h3>
        <strong>Type: </strong>{this.props.wine.color}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    wineId: ownProps.match.params.wineId, 
    wine: state.wines
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWine: loadWine
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WinePage);