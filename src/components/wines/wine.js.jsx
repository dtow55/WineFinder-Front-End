import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

const Wine = ({ wine }) => {
  return (
    <ListGroupItem href={`/wines/${wine.id}`} > 
      {wine.print}
    </ListGroupItem>
  )
}

export default Wine;