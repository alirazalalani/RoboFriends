import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import * as React from 'react';

// const Card = (props) => {
    const Card=({name,email,id})=>{
  return (
    <>
      <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 w6">
        <img src={`https://robohash.org/${id} 200x200`} alt="Pic unavailable" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
