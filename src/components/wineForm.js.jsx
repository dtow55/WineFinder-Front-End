import React, { Component } from 'react';

class WineForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "", 
      color: "", 
      grape: "", 
      price: "", 
      description: ""
    }
  }

  onChangeHandler = (event) => {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <form id="wine-form">
          Name <input type="text" name="name" onChange={this.onChangeHandler} /><br/>
          Type <input type="text" name="color" value={this.state.color} onChange={this.onChangeHandler} /><br/>
          Varietal <input type="text" name="grape" value={this.state.grape} onChange={this.onChangeHandler} /><br/>
          Price <input type="number" name="price" value={this.state.price} onChange={this.onChangeHandler} /><br/>
          Description <textarea name="description" value={this.state.description} onChange={this.onChangeHandler} /><br/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default WineForm;