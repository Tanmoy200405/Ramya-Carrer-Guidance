import React, { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import EntryGate from './components/EntryGate'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if user has already submitted survey
    if (localStorage.getItem('survey_completed') === 'true') {
      setIsUnlocked(true);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false, 
      touchMultiplier: 2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {!isUnlocked && <EntryGate onUnlock={() => setIsUnlocked(true)} />}
      <div className={!isUnlocked ? 'h-screen overflow-hidden' : ''}>
        <LandingPage />
      </div>
    </>
  )
}

export default App

