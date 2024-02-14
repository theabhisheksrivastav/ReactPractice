import React from 'react'
import { Navbar } from './components/Navbar'
import { Foot } from './components/Foot'
import { Courses } from './components/Courses'

export const App = () => {
  return (
    <>
      <Navbar />
      <Courses />
      <Foot />
    </>
  )
}

export default App