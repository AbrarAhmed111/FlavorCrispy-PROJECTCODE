import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HeadlinesCard from './Components/HeadlinesCard'
import Food from './Components/Food'
import Category from './Components/Category'

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinesCard/>
      <Food/>
      <Category/>
    </div>
    </>
  )
}

export default App
