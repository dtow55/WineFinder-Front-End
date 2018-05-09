import React, { Component } from 'react';

class WineList extends Component {
  render() {

    const wines = this.props.winesData.map((wine, index) => {
      return <li key={index}>{wine.print}</li>
    });

    return (
      <div>
        {wines}
      </div>
    )
  }
}

export default WineList;