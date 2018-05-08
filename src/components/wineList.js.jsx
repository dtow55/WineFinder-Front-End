import React, { Component } from 'react';

class WineList extends Component {
  render() {

    const wines = this.props.winesData.map((wine) => {
      return <li>{wine.print}</li>
    });

    return (
      <div>
        {wines}
      </div>
    )
  }
}

export default WineList;