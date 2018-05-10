import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadWine } from '../actions/actions'
import { WineInfo } from '../components/wines/winePageComponents.js.jsx';

class WinePage extends Component {

  componentDidMount() {
    this.props.loadWine(this.props.wineId);
  }

  render(props) {
    const wine = this.props.wine;

    return (
      <div>
        <WineInfo wine={wine}/>

        <div id="wine-comments">
          <h3>Comments: </h3>
        </div>

        <div id="wine-stores">
          <h3>Stores Selling this Wine: </h3>
        </div>
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