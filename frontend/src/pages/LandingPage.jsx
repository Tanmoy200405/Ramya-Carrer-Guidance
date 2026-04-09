import React, { useEffect, useState } from 'react'
import Head from '../components/Head'
import Nav from '../components/Nav'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Home from '../components/Home'
import CollegePartners from '../components/CollegePartners'
import HowItWorks from '../components/HowItWorks'
import Courses from '../components/Courses'
import FounderMessage from '../components/FounderMessage'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import StartJourney from '../components/StartJourney'
import Footer from '../components/Footer'

const LandingPage = () => {

  const [showHead, setShowHead] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHead(false);
      } else {
        setShowHead(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

      {/* 🔹 HEAD */}
      <Head show={showHead} />

      {/* 🔹 NAV */}
      <Nav showHead={showHead} open={isMenuOpen} setOpen={setIsMenuOpen} />

      {/* 🔹 FLOAT BUTTON */}
      {!isMenuOpen && <WhatsAppFloat />}

      {/* 🔹 CONTENT */}
      <div className="pt-[130px]">
        <Home />
        <CollegePartners />
        <HowItWorks />
        <Courses />
        <FounderMessage />
        <Testimonials />
        <ContactForm />
        <StartJourney />
        <Footer />
      </div>

    </div>
  )
}

export default LandingPage