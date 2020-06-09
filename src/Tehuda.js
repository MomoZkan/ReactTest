import React from 'react'
import './Tehuda.css';
import './Card.css';
import Card from './Card.js';
var TemotoData = new Array();

function Tehuda(props){
  const num=props.number;
  return(
    <div className="tehuda">
      <Card className="cardNormal" foo={num} />
    </div>
  );
}
export default Tehuda;
