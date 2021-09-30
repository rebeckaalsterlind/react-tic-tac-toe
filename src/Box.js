import React from 'react';
import './style.css';

export default function Box({player}) {

  const handleClick = (evt) => {
    console.log('player', evt.target, player);
    (player) ?  evt.target.innerText = "X" : evt.target.innerText = "O";
   

  }
  return (
    <div className="box" onClick={handleClick}></div>
  );
}
