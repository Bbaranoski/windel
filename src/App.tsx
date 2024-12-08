import React from 'react';
import { useState } from 'react';
import './App.css';
import Dashboard from './dashboard';
import Cliente from './cliente';

const App: React.FC = () => {

  const [tela, setTela] = useState<JSX.Element>(<Dashboard />)
  
  return (
    <div className='app'>
      <div className='header'>
        <h1>WINDEL</h1> 
      </div>
      <div className='side'>
        <button onClick={() => {
          setTela(<Dashboard />)
        }}>dashboard</button>
        <button onClick={() => {
          setTela(<Cliente />)
        }}>cliente</button>
      </div>
      {tela}
    </div>
  )
}

export default App;
