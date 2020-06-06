import React from 'react'
import './Card.css';
import Cardinfo from './Card.json';


function Card(props){
  const num = props.foo;
  const image = Cardinfo[num];
  return(
    <div>
      <img className={props.className} src={`${process.env.PUBLIC_URL}/card/${image.img}`} />
    </div>
  )
}
export default Card;
