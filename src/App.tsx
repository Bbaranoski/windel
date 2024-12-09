import React from 'react';
import { useState } from 'react';
import './App.css';
import Inicio from './inicio';
import Cliente from './cliente';
import { FaHome } from "react-icons/fa";

const App: React.FC = () => {

  const [tela, setTela] = useState<JSX.Element>(<Inicio />)
  
  return (
    <div className='app'>
      <div className='header'>
        <FaHome size={40} color='black'/>
        <h1>Sim</h1> 
      </div>
      <div className='side'>
        <h1>WINDEL</h1>
        <button onClick={() => {
          setTela(<Inicio />)
        }}>Home</button>
        <button onClick={() => {
          setTela(<Cliente />)
        }}>cliente</button>
      </div>
      {tela}
    </div>
  )
}

export default App;
