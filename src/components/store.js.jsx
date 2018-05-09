import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Store = ({ store }) => {
  return (
    <div>
      <Link to={`/stores/${store.id}`}>{store.name}</Link>
    </div>
  )
}

export default Store;