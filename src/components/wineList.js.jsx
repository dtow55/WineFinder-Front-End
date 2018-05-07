import React, { Component } from 'react';

const WineList = ( {winesData} ) => {
  
  const wines = winesData.map((wine) => {
    return <li>wine.print</li>
  });

  return (
    <div>
      {wines}
    </div>
  )
}

export default WineList;