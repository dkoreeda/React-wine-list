import React, { Component } from 'react';

class WineList extends Component {

  changeClass() {
    // console.log("clicked");
    const list = document.querySelector('.hiddenlist');
    if(list.style.display === "none") {
      list.style.display = "block";
      document.querySelector('.button').textContent = 'Hide All';
    } else {
      list.style.display = "none";
      document.querySelector('.button').textContent = 'View All';
    }
  }

  renderWines(wines, selectWine) {
    // console.log("renderWines", wines);

    if(!wines) {
      return <p> Loading... </p>
    }
    return wines.map((wine, index) => {
      // console.log("wine", wine);
      return (
        <div className="wine" key={index} onClick={() => selectWine(wine)} >
          <h3>{wine.name} - {wine.country}</h3>
        </div>
      );
    });
  }

  getTheButton(wines, selectWine) {
    return <button onClick={() => { this.changeClass()}} className="button">
                View All
           </button>;
  }

  render() {
    const button = this.getTheButton(this.props.wines, this.props.selectWine);
    return(
      <div className="winelist">
        {button}
        <div style={{display: "none"}}id="list" className="hiddenlist">
          {this.renderWines(this.props.wines, this.props.selectWine)}
        </div>
      </div>
    );
  }
}

export default WineList;
