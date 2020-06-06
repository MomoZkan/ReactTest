import React from 'react'
import './Tehuda.css';
import './Card.css';
import Card from './Card.js';

function Tehuda(){
  return(
    <div className="tehuda">
      <Card className="cardNormal" foo={50} />
    </div>
  );
}
export default Tehuda;
