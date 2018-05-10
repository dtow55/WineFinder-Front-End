import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

const Store = ({ store }) => {
  return (
    <ListGroupItem header={store.name} href={`/stores/${store.id}`} > 
      {store.address}
    </ListGroupItem>
  )
}

export default Store;