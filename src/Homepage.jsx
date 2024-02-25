import { useState, useEffect } from 'react'
import './homepage.css'
import Navbar from './components/navbar'
import Main from './components/mainContent'
import PopularProducts from './components/popularProducts'
import FeaturedCategory from './components/featuredCategory'
import SponsoredProduct from './components/sponsoredProduct'
import Article from './components/articles'
function Homepage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
       function handleResize() {
        setWindowWidth(window.innerWidth)
       }
        window.addEventListener('resize', handleResize)
    }, [windowWidth])
  return (
    <div className='app'>
      <Navbar windowWidth={windowWidth}/>
      <Main windowWidth={windowWidth}/>
      <FeaturedCategory windowWidth={windowWidth}/>
      <PopularProducts windowWidth={windowWidth}/>
      <SponsoredProduct />
      <Article />
    </div>
  )
}

export default Homepage
