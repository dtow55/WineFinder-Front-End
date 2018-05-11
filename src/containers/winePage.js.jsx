import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import { loadWine } from '../actions/actions'
import { WineInfo, WineComments } from '../components/wines/winePageComponents.js.jsx';
import StoreList from '../components/stores/storeList.js.jsx';

class WinePage extends Component {

  /*
  componentDidMount() {
    this.props.loadWine(this.props.wineId);
  }
  */

  render(props) {
    const wine = this.props.wine;

    return (
      <div>
        <WineInfo wine={wine}/>

        <div id="wine-comments">
          <h3>Comments: </h3>
          <WineComments comments={wine.comments}/>
        </div>

        <div id="wine-stores">
          <h3>Stores Selling this Wine: </h3>
          <StoreList stores={wine.stores}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //debugger;
  const wine = state.wines.find(wine => wine.id === ownProps.match.params.wineId)

  if (wine) {
    return { wine: wine } 
  } else {
    return { wine: {} }
  }
}

export default connect(mapStateToProps)(WinePage);

/* This code (along with componentDidMount() above) allows WinePage to query the 
    API and load information on a single wine based on the URL. 

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
*/