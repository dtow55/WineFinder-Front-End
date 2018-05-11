import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStore, loadWinesFromStore } from '../actions/actions';
import { StoreInfo } from '../components/stores/storePageComponents.js.jsx';
import WineList from '../components/wines/wineList.js.jsx';

class StorePage extends Component {

  componentDidMount() {
    this.props.loadStore(this.props.storeId);
    //this.props.loadWinesFromStore(this.props.store.wines);
  }

  render(props) {

    const store= this.props.store;
    const {wines} = this.props.store;

    return (
      <div>
        <StoreInfo store={store} />

        <h3>Wines at this Store: </h3>
          <WineList wines={wines} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    storeId: ownProps.match.params.storeId, 
    store: state.stores
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStore: loadStore, 
    loadWinesFromStore: loadWinesFromStore
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);

/*
const mapStateToProps = (state, ownProps) => {
  const wine = state.wines.find((wine, index) => wine.id == ownProps.match.params.wineId)

  if (wine) {
    return { wine: wine } 
  } else {
    return { wine: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadWinesFromStore: loadWinesFromStore
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);
*/