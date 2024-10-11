import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'




function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
      </div>
    </>
  )
}

export default App
