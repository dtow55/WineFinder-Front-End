import React, { Component } from 'react';
import { connect } from 'react-redux';

class WineShow extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.wine.name}</h3>
        <strong>Type: </strong>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const wine = state.wines.find(wine => wine.id == ownProps.match.params.wineId);
  console.log(ownProps.match.params);
  if (wine) {
    return { wine: wine };
  } else {
    return { wine: {} };
  }
}

export default connect(mapStateToProps)(WineShow);