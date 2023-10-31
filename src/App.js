import './App.css';
import { useState } from 'react';

function Button({text, onClick}){
  return(
    <button onClick={onClick}>{text}</button>
  )
}

function ResButton({onClick}){
  return(
    <button onClick={onClick} id='reset'>Reset</button>
  )
}


function Displayer({value}){
  return(
    <h1>{value}</h1>
  )
}



function App() {

  const [count, setCount]=useState(0);

  function incrCount(){
    setCount(count+1);
  }

  function decrCount(){
    setCount(count-1);
  }

  function set2Zero(){
    setCount(0);
  }


  
  return (
    <>
    <div className="main">
      <div id="count">
        <Displayer value={count}/>
      </div>
      
      <div className='options'>
        <Button text="+" onClick={incrCount} />
        <Button text="-" onClick={decrCount}/>
        <ResButton onClick={set2Zero}/>
      </div>    
    </div>
    
    </>
  );
}

export default App;
