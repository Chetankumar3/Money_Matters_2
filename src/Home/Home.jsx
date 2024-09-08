import React from 'react'
import Hero from './Hero'
import About from './About.jsx'
import './Styling/Home.css'

function Home() {
  return (
    <div className='main'>
      <Hero />
      <About />
    </div>
  );
}

export default Home