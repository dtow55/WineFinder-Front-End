import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const Wine = ({ wine }) => {
  return (
    <ListGroupItem href={`/wines/${wine.id}`} > 
      {wine.print}
    </ListGroupItem>
  )
}

export default Wine;