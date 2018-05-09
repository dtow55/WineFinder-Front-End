import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Wine = ({ wine }) => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => 'yes'} />
      </div>
    </Router>
  )
}

export default Wine;