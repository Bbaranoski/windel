import React from 'react';
import { useState } from 'react';
import './App.css';
import Dashboard from './dashboard';
import Cliente from './cliente';

const App: React.FC = () => {

  const [tela, setTela] = useState<JSX.Element>(<Dashboard />)
  
  return (
    <div>
      {tela}
      <button onClick={() => {
        setTela(<Dashboard />)
      }}>dashboard</button>
      <button onClick={() => {
        setTela(<Cliente />)
      }}>cliente</button>
    </div>
  )
}

export default App;
