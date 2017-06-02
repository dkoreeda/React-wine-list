import React, { Component } from 'react';
import '../App.css';
const axios = require('axios');
import WineList from './WineList';
import AddWine from './AddWine';
import Container from './Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wines: null,
      currentWine: ''
    }
    // console.log("constructor", this.state.wines);
  }

  selectWine(wine) {
    this.setState({
      currentWine: wine
    });
  }

  componentDidMount() {
    // console.log("componentDidMount", this.state.wines);
    const self = this;
    axios({
      method: 'get',
      url: 'http://myapi-profstream.herokuapp.com/api/032335/wines'
    })
      .then(function(response) {
        // console.log("axios", response.data);
        const wines = response.data;
        self.setState({wines: wines});
      })
  }

  handleDataSubmission(data) {
    axios({
      method: 'post',
      url: '/api',
      data: data
    });
  }

  render() {
    // console.log("render", this.state.wines)
    return (
      <div>

        <div className="form">
          <h3> Add a New Wine </h3>
          <AddWine submitData={this.handleDataSubmission.bind(this)}/>
        </div>

        <div className="App">
          <WineList wines={this.state.wines} selectWine={this.selectWine.bind(this)}/>
          <Container wine={this.state.currentWine}/>
        </div>

      </div>
    );
  }
}

export default App;
