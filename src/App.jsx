import { useState,useEffect } from 'react';
import './App.css';
import Separator from './assets/images/pattern-divider-desktop.svg';
import Dice from './assets/images/icon-dice.svg';

function App() {
  const [data, setdata] = useState("");
  const getquote = async()=>{
    const url = 'https://api.adviceslip.com/advice';
    const response = await fetch(url);
    const data = await response.json();
    setdata(data.slip.advice);
  }

  // useEffect 
  useEffect(()=>{
    getquote();
  },[]);

  return (
    <div className="card">
      <h1>{data}</h1>
      <img className='seperator' src={Separator} alt="separator image"/>
      <br />
      <img className='dice' onClick={getquote} src={Dice} alt="dice"/>
    </div>
  )
}

export default App
