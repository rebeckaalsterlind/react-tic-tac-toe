import React, {useState} from 'react';
import './App.css';
import Board from './Board';
import Button from './Button';

function App() {

  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      <Board player={player} />
      <Button player={player} changePlayer={isTrue => setPlayer(isTrue)} />
    </div>
  );
}

export default App;
