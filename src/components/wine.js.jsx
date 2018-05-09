import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Wine = ({ wine }) => {
  return (
    <div>
      <Link to={`/wines/${wine.id}`}>{wine.print}</Link>
    </div>
  )
}

export default Wine;