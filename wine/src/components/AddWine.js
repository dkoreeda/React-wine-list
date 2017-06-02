import React, { Component } from 'react';

class AddWine extends Component {

  constructor() {
    super();
    this.state = {
      wine: '',
      country: '',
      description: ''
    }
    console.log(this.props);
  }

  setValue(field, event) {
    let object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleSubmit(e) {
    // e.preventDefault();
    // trim() removes the whitespace, tab, etc
    const wine = this.state.wine.trim();
    const country = this.state.country.trim();
    const description = this.state.description.trim();
  }

  // this.props.submitData({
  //   wine: wine,
  //   country: country,
  //   description: description
  // });

  // this.setState({
  //   wine: '',
  //   country: '',
  //   description: ''
  // });

  render() {
    return (
      <form onSubmit={this.handleSubmit()}>
        <label>
          Name:
          <input
            uniqueName="newWine"
            text="wine"
            type="text"
            value={this.state.wine}
            onChange={this.setValue.bind(this, 'wine')}
            />
        </label>
        <br />
        <label>
          Country:
          <input
            uniqueName="country"
            text="country"
            type="text"
            value={this.state.country}
            onChange={this.setValue.bind(this, 'country')}
            />
        </label>
        <br />
        <label>
          Description:
          <input
            uniqueName="description"
            text="description"
            type="text"
            value={this.state.description}
            onChange={this.setValue.bind(this, 'description')}
             />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddWine;
