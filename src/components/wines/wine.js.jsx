import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Wine = ({ wine }) => {
  return (
    //<ListGroupItem href={`/wines/${wine.id}`} > 
    <LinkContainer to={`/wines/${wine.id}`}>
      <ListGroupItem> 
        {wine.print}
      </ListGroupItem>
    </LinkContainer>
  )
}

export default Wine;