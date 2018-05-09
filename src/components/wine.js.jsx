import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Wine = ({ wine }) => {
  return (
    <div>
      <Link to='/'>{wine.print}</Link>
    </div>
  )
}

export default Wine;