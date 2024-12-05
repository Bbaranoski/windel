import React from 'react';
import './App.css';
import { useState } from 'react'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  return(
    <div className='App'>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>click</button>
      <p>{count}</p>
    </div>
  )
}

export default App;
