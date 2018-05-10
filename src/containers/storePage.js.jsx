import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStore } from '../actions/actions';

class StorePage extends Component {

  componentDidMount() {
    this.props.loadStore(this.props.storeId);
  }

  render(props) {
    const store = this.props.store;

    return (
      <div>
        <h3>{store.name}</h3>
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