import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Welcome from './Small components/Welcome.jsx'
import Bar from './Small components/bar.jsx'
import Sub from './Small components/sub.jsx'
import './Styling/Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="wel">Welcome to<h1 className='nameclub'>MONEY MATTERS</h1></div>
      <div className="iiit">The Financial  Club Of IIIT Naya Raipur</div>
      <div className="quote">Where <span className="green"> Education</span> Meets <span className="green">Financial Empowerment</span></div>
      <div className="collab">IN COLLABORATION WITH</div>
      <div className="outerzerodha"><img src="public\Zerodha_logo_1.png" alt="" className="zerodha" /></div>
    </div>
  )
}

export default Hero