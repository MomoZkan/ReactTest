import React from 'react';
import './App.css';

const a = "1";

function App3() {
  // print();
  return (
    <div className="App2">
      <table className="App-header">
        <tr>
        <td>1</td>
        <td>{a}</td>
        </tr>
        <tr>
        <td>3</td>
        <td>4</td>
        </tr>
      </table>
    </div>
  );
}

function App2(){
  // for(let i = 1; i < 10; i++){
  return(
    App3(),
    App3()
  );
}

export default App2;
