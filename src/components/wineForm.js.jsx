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
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    console.log(JSON.stringify(this.state));
    
    fetch(`http://localhost:4000/wines`, {body: JSON.stringify(this.state), method: 'POST'})
      .then(response => console.log(response));
    
  }

  render() {
    return (
      <div>
        <form id="wine-form" onSubmit={this.onSubmitHandler} >
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