import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import Wine from './wine.js.jsx';

class WineList extends Component {
  render() {

    const wines = this.props.wines.map((wine, index) => {
      return <Wine key={index} wine={wine} />
    });

    return (
      <ListGroup>
        {wines}
      </ListGroup>
    )
  }
}

export default WineList;