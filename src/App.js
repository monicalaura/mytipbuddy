import React, { useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [advice, setAdvice] = useState('CLICK AND GET A TIP!');


 //fetchTip function
 const fetchTip = () => {
   axios.get("https://api.adviceslip.com/advice")
   .then((response) => {
     const {advice} = response.data.slip; 
     setAdvice(advice);
    console.log(advice)
   })
   .catch((error) => {
    console.log(error)
   });
 }
 

  return (
    <div className ="container">
      <header>
        <h1>MyTIPBuddy</h1>
      </header>
 
      <div className ="tip" onClick={fetchTip}>
     <h2>{advice}</h2>
        </div>
        
      <div className = "robot-wrapper">
        <button className = "robotBtn" onClick={fetchTip}><span> Get a <br/> TIP  
        </span>
        </button>
      </div>
      <footer>&copy; Copyright 2020 <a href ="https://monicalaura.github.io/portfolio" target ="_blank"><em>Monica Laura</em> </a></footer>

    </div>
  );
}

export default App;
