import { useState,useEffect } from 'react';
import './App.css';

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
    <div className="App">
      <h1>{data}</h1>
      <button onClick={getquote}>Click</button>
    </div>
  )
}

export default App
