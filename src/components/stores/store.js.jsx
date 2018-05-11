import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Store = ({ store }) => {
  return (
    <LinkContainer to={`/stores/${store.id}`}>
      <ListGroupItem header={store.name} href={`/stores/${store.id}`} > 
        {store.address}
      </ListGroupItem>
    </LinkContainer>
  )
}

export default Store;