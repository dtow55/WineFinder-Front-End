import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Store from './store.js.jsx';

class StoreList extends Component {
  render() {
    if (this.props.stores) {

      const stores = this.props.stores.map((store, index) => {
        return <Store key={index} store={store} />
      });
      
      return (
        <ListGroup>
          {stores}
        </ListGroup>
      )

    } else {
      return null;
    }
  }
}

export default StoreList;