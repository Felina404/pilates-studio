import { useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'

function App() {

  return (
    <div className='h-screen flex flex-col items-center bg-gray-100 overflow-hidden'>
     <div className='w-full bg-white shadow-md'>
      <Header />
      <Hero />
     </div>    
      <h1 className='text-4xl font-bold text-purple-600'>
        Welcome to Your Pilates Landing Page
      </h1>
      <h1 className='text-4xl font-bold text-purple-600'>
        Welcome to Your Pilates Landing Page
      </h1>
      <h1 className='text-4xl font-bold text-purple-600'>
        Welcome to Your Pilates Landing Page
      </h1>
    </div>
  )
}

export default App
