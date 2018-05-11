import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Store = ({ store }) => {
  return (
    <ListGroupItem header={store.name} href={`/stores/${store.id}`} > 
      {store.address}
    </ListGroupItem>
  )
}

export default Store;