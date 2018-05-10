import React, { Component } from 'react';

export const StoreInfo = ({ store }) => {
  return (
    <div id="store-info">
      <h3>{store.name}</h3>
      {store.address}
    </div>
  )
}