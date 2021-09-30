import React from 'react';
import Box from './Box';

export default function Board({player}) {

  const row = [1,2,3];
  const box = [1,2,3];

  return (
    <div className="board">
      {row.map((r, index) =>    
      <div className="row" key={index}>
          {box.map((b, bIndex) => <Box player={player} key={index+":"+bIndex}/>)}
        </div>)}
    </div>
  );


}



