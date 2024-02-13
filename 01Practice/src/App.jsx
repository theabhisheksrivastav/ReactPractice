import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState('Hello World')

  const clicked = () => {
    setCount(count + '!')
  }
  const reset = ()  => {
    setCount('Hello World')
  }
  return (
    <div className='bg-cyan-200'>
      <h1 className='bg-green-200 text-red-400 p-3 rounded-xl'>{count}</h1>
      <div className='flex justify-between'>
        <button className='bg-red-100 text-green-600 p-6 rounded' onClick={clicked}>click me</button>
        <button className='bg-red-100 text-green-600 p-6 rounded ' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
