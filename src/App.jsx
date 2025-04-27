import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
function App() {

  return (
    <div id="home" className='h-screen flex flex-col items-center'>
     <div className='w-full '>
      <Header />
     </div>   
     <Hero /> 
     <main className='w-full h-full'>
      <About />
     </main>
    </div>
  )
}

export default App
