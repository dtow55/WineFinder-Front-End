import React from 'react';

export const StoreInfo = ({ store }) => {
  if (store.user) {

    return (
      <div id="store-info">
        <h3>{store.name}</h3>
        <p>
          {store.address}<br/>
          Owner: {store.user.name}<br/>
          Contact: {store.user.email}<br/>
        </p>
      </div>
    )

  } else {
    return null;
  }
}