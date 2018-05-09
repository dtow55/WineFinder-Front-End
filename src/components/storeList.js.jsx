import React, { Component } from 'react';
import Store from './store.js.jsx';

class StoreList extends Component {
  render() {

    const stores = this.props.stores.map((store, index) => {
      return <Store key={index} store={store} />
    });

    return (
      <div>
        {stores}
      </div>
    )
  }
}

export default StoreList;