import React, { Component } from 'react';
import Wine from './Wine';

class Container extends Component {
  render() {
    return (
      <div className="display-wine">
        <Wine wine={this.props.wine}/>
      </div>
    );
  }
}

export default Container;
