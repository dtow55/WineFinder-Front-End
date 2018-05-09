import React, { Component } from 'react';
import Wine from './wine.js.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class WineList extends Component {
  render() {

    const wines = this.props.wines.map((wine, index) => {
      return <Wine key={index} wine={wine} />
    });

    return (
      <div>
        {wines}
      </div>
    )
  }
}

export default WineList;