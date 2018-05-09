import React, { Component } from 'react';

class StoreList extends Component {
  render() {

    const stores = this.props.stores.map((store) => {
      return <li>{store.name}<br/>{store.address}</li>
    });

    return (
      <div>
        {stores}
      </div>
    )
  }
}

export default StoreList;