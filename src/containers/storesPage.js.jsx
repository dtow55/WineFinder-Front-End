import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStores } from '../actions/actions';
import StoreList from '../components/storeList.js.jsx';

class StoresPage extends Component {

  componentDidMount() {
    this.props.loadStores();
    console.log(this.props.stores);
  }

  render() {
    return (
      <StoreList stores = {this.props.stores}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    stores: state.stores, 
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadStores: loadStores
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresPage);