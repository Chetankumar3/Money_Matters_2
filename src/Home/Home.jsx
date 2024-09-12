import React from 'react'
import Hero from './Hero'
import About from './About.jsx'
import Team from './Team.jsx'
import Footer from './Footer.jsx'
import './Styling/Home.css'

function Home() {
  return (
    <div className='main'>
      <Hero />
      <About />
      <Team />
      <Footer />
    </div>
  );
}

export default Home