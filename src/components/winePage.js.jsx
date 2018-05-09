import React, { Component } from 'react';
import { connect } from 'react-redux';

class WineShow extends Component {
  render() {
    return (
      <div>
        test
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const wine = state.wines.find(wine => wine.id == ownProps.match.params.wineId);
  if (wine) {
    return { wine: wine };
  } else {
    return { wine: {} };
  }
}

export default connect(mapStateToProps)(WineShow);