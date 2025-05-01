import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Prices from './Prices'
import Contact from './Contact'
import Footer from './Footer'
function App() {

  return (
    <div id="home" className='h-screen flex flex-col items-center'>
     <div className='w-full'>
      <Header />
     </div>   
     <Hero /> 
     <main className='w-full'>
      <About />
      <Prices />
      <Contact />
     </main>
     <Footer className='w-full h-full'/>
    </div>
  )
}

export default App
