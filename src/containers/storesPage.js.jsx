import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PageHeader } from 'react-bootstrap';
import { loadStores } from '../actions/actions';
import StoreList from '../components/stores/storeList.js.jsx';

class StoresPage extends Component {

  componentDidMount() {
    this.props.loadStores();
  }

  render() {
    return (
      <div>
        <PageHeader>
          Stores
        </PageHeader>
        <StoreList stores = {this.props.stores}/>
      </div>
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