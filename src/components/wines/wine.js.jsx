import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Wine = ({ wine }) => {
  return (
    <LinkContainer to={`/wines/${wine.id}`}>
      <ListGroupItem> 
        {wine.print}
      </ListGroupItem>
    </LinkContainer>
  )
}

export default Wine;