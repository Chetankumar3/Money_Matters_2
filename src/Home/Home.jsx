import React from 'react'
import Hero from './Hero'
import About from './About.jsx'
import Team from './Team.jsx'
import './Styling/Home.css'

function Home() {
  return (
    <div className='main'>
      <Hero />
      <About />
      <Team />
    </div>
  );
}

export default Home