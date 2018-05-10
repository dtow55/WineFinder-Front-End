import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Store from './store.js.jsx';

class StoreList extends Component {
  render() {
    console.log(this.props)
    /*
    const stores = this.props.stores.map((store, index) => {
      return <Store key={index} store={store} />
    });
    */
    return (
      <ListGroup>
        {/*stores*/}
      </ListGroup>
    )
  }
}

export default StoreList;