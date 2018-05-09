import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWine } from '../actions/actions';

class WinePage extends Component {

  componentDidMount() {
    this.props.loadWine(this.props.wineId);
  }

  render(props) {
    const wine = this.props.wine;

    return (
      <div>
        <h3>{wine.name}</h3>
        <strong>Type: </strong>{wine.color}<br/>
        <strong>Varietal: </strong>{wine.grape}<br/>
        <strong>Price: </strong>{wine.price}<br/>
        <strong>Description: </strong>{wine.description}<br/>
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