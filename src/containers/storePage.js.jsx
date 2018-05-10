import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStore } from '../actions/actions';
import { StoreInfo } from '../components/stores/storePageComponents.js.jsx';
import WineList from '../components/wines/wineList.js.jsx';

class StorePage extends Component {

  componentDidMount() {
    this.props.loadStore(this.props.storeId);
  }

  render(props) {
    const store = this.props.store;

    return (
      <div>
        <StoreInfo store={store} />

        <h3>Wines at this Store: </h3>
          <WineList wines={store.wines} />
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
    loadStore: loadStore
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StorePage);