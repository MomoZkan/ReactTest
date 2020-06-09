import React from 'react'
import './Tehuda.css';
import './Card.css';
import Card from './Card.js';

function Tehuda(props){
  const num=props.number;
  return(
    <div className="tehuda">
      <Card className="cardNormal" foo={num} />
    </div>
  );
}
export default Tehuda;
