import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero_one from './components/Hero_one'
import Hero_two from './components/Hero_two'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <button className='btn'>Get started</button>
      <input type="text" />
      <NavBar />
      <Hero_one />
      <Hero_two />
      <GetStarted />
      <Footer/>
    </>
  )
}

export default App
