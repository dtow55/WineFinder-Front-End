import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

const Wine = ({ wine }) => {
  return (
    //<ListGroupItem href={`/wines/${wine.id}`} > 
    <ListGroupItem> 
      <Link to={`/wines/${wine.id}`}>{wine.print}</Link>
    </ListGroupItem>
  )
}

export default Wine;