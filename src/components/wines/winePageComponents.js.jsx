import React, { Component } from 'react';

export const WineInfo = ({ wine }) => {
  return (
    <div id="wine-info">
    <h3>{wine.name}</h3>
    <strong>Type: </strong>{wine.color}<br/>
    <strong>Varietal: </strong>{wine.grape}<br/>
    <strong>Price: </strong>${wine.price}<br/>
    <strong>Description: </strong>{wine.description}<br/>
  </div>
  )
}

export const WineComments = ({ comments }) => {
  
  if (comments) {
    
    const commentsHTML = comments.map((comment, index) => {
      return <p>{comment.content}</p>
    });
    
    return (
      <div>
      {commentsHTML}
      </div>
    )
    
  } else {
    return null;
  }
}