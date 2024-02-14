import React from 'react'
import { Navbar } from './components/Navbar'
import { Foot } from './components/Foot'
import { Courses } from './components/Courses'

export const App = () => {
  return (
    <>
      <div className='overflow-y-scroll no-scrollbar'>
      <Navbar />
      <Courses />
      <Foot />
      </div>
    </>
  )
}

export default App