import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const termWidth = 80;
  const termColumn = 24;
  const arrayData = Array(termColumn).fill("testing this out");

  return (
    <div className="App">
        <div id="container">
          {arrayData.map((line)=>
            <svg viewBox="0 0 56 18">
              <text x="0" y="15">{line}</text>
            </svg>
          )}
        </div>
    </div>
  );
}

export default App;
