import React from 'react'
import Nav from '../components/Nav'
import Home from '../components/Home'
import CollegePartners from '../components/CollegePartners'
import HowItWorks from '../components/HowItWorks'
import Courses from '../components/Courses'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Home />
      <CollegePartners />
      <HowItWorks />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default LandingPage
