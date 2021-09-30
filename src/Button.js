import React from 'react'

export default function Button({changePlayer, player}) {

  const handleClick = () => {
    changePlayer(!player)
  }

  return (
    <button onClick={handleClick}>Done</button>
  );
  
}
