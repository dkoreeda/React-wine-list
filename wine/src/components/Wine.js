import React from 'react';

const Wine = (props) => {
  // console.log("Wine.js", props.wine);
  const wine = props.wine;
  return (
    <div className="wine-detail">
      <h3>Name: {wine.name}</h3>
      <h5>Country: {wine.country}</h5>
      <p>Description: {wine.description}</p>
      <p>Grapes: {wine.grapes} </p>
      <p>Year: {wine.year} </p>
      <p> Region: {wine.region} </p>
      <img src={wine.picture} />
    </div>
  );
}

export default Wine;
