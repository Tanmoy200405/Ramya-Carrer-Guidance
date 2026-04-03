import React from 'react'
import image2 from '../assets/image2.jpeg'

const Home = () => {
  return (
    <div className='h-100 w-full flex items-center justify-center gap-10'
    style={{backgroundColor:'var(--primary-green)'}}
    >
      <div className='flex flex-col'>
        <div className='text-xl px-2 rounded  '
        style={{backgroundColor:'var(--accent-gold)'}}>
          Admission Open for 2026
        </div>
        <div className='text-4xl font-bold ml-10 py-5 px-5 '>
        <h1 style={{color:'var(--white)'}}>Confused After 12?</h1>
        <h1 style={{color:'var( --accent-gold)'}}>We'll Help You Get Into</h1>
        <h1 style={{color:'var( --accent-gold)'}}>Right College.</h1>
      </div>
      <div className='text-sm'
      style={{color:'var(--white)'}}>
        <span>Free Carer Guidance.</span>
        <span>Free Carer Guidance.</span>
        <span>Free Carer Guidance.</span>
        <span>Free Carer Guidance.</span>
        <span>Free Carer Guidance.</span>
      </div>
      </div>
      <div>
        <img className='h-full w-full md:min-h-full md:min-w-' src={image2} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Home
