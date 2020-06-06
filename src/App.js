import React from 'react';
import './App.css';
import Tehuda from './Tehuda.js';
import Yamahuda from './Yamahuda.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tehuda />
        <Yamahuda />
        <Tehuda />
      </header>
    </div>
  );
}

export default App;
