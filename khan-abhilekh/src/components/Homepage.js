import React from 'react'
import Navbar from './Home/Navbar'
import HeroSection from './Home/HeroSection'
import About from './Home/About'
import Features from './Home/Features'
import Report from './Home/Report'
import Footer from './Home/Footer'
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Features/>
      <Report/>
      <Footer/>
    </div>
  )
}

export default Homepage
