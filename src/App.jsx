import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Main from './components/mainContent'
import FeaturedCategory from './components/featuredCategory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
      <FeaturedCategory/>
    </>
  )
}

export default App
