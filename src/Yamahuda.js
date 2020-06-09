import React from 'react'
import Card from './Card.js';
import './Yamahuda.css';
import Tehuda from './Tehuda.js';
var myData = new Array(53);	

function shahhuru(){
  for (let i=0; i<53; i++) myData[i] = i;	// myData[0～30] に 1～31を順次セット
  for (let i=0; i<500; i++){	// 500回 myData の内容をシャッフルする
    let myA = Math.floor( Math.random() * 53 );	// 0～30 を決める
    let myB = Math.floor( Math.random() * 53 );	// 0～30 を決める
    let myBackup = myData[myA];	// myData の myA番目とmyB番目の内容を入れ替える
    myData[myA] = myData[myB];	
    myData[myB] = myBackup;	
  }	
}

function hiku(num){
  // const myReturn = myData[0];
  // for(let i=0; i<myData.length; i++)myData[i] = myData[i+1];
  // myData[53] = 0;
  return (
    <div>
      <Tehuda number={52}/>
      {/* {alert(num)}; */}
    </div>
  )
  // return window.location.reload;
}

function Yamahuda(){
  shahhuru();
  
  return(
    <div className="yamahuda">
      {myData.map((number) => 
      <div onClick={(e)=>hiku(number)}>
        <Card className="cardMini" foo={number} />
      </div>
      )}
    </div>
  );
}
export default Yamahuda;
