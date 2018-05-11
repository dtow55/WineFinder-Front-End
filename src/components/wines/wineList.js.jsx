import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Wine from './wine.js.jsx';

class WineList extends Component {
  render() {
    if (this.props.wines) {

      const wines = this.props.wines.map((wine, index) => {
        return <Wine key={index} wine={wine} />
      });

      return (
        <ListGroup>
          {wines}
        </ListGroup>
      )

    } else {
      return null;
    }
  }
}

export default WineList;