import React from 'react'
import Navbar from './Landingpage/Navbar'
import HeroSection from './Landingpage/HeroSection'
import About from './Landingpage/About'
import Features from './Landingpage/Features'
import Report from './Landingpage/Report'
import Footer from './Landingpage/Footer'
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
