import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './home';
import Cliente from './cliente';

const App: React.FC = () => {

  const [tela, setTela] = useState<JSX.Element>(<Home />)
  
  return (
    <div className='app'>
      <div className='header'>
        <h1>Sim</h1> 
      </div>
      <div className='side'>
        <h1>WINDEL</h1>
        <button onClick={() => {
          setTela(<Home />)
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
