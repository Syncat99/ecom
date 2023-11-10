import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/mainContent'
import PopularProducts from './components/popularProducts'
import FeaturedCategory from './components/featuredCategory'

function App() {

  return (
    <>
      <Navbar/>
      <Main/>
      <FeaturedCategory/>
      <PopularProducts/>

    </>
  )
}

export default App
