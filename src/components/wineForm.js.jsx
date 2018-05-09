import React, { Component } from 'react';

class WineForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "", 
      color: "", 
      grape: "", 
      price: 0.00, 
      description: ""
    }
  }

  onChangeHandler(event) {
    this.setState({
      
    });
  }

  onSubmitHandler(event) {

  }

  render() {
    return (
      <div>
        <form id="wine-form">
          Name <input type="text" name="wine[grape]" value={this.state.name} /><br/>
          Type <input type="text" name="wine[grape]" value={this.state.color} /><br/>
          Varietal <input type="text" name="wine[grape]" value={this.state.grape} /><br/>
          Price <input type="number" name="wine[grape]" value={this.state.price} /><br/>
          Description <textarea name="wine[grape]" value={this.state.description} /><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default WineForm;