import React from 'react'
import './index.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
      <Navbar/>
    </main>
  )
}

export default App
