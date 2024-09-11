import React from 'react'
import './Styling/Team.css'
import Member from './Small components/Member.jsx'
import Bar from './Small components/bar.jsx'
import Welcome from './Small components/Welcome.jsx'


import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App(){
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "60px",
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <div className='Team'>
        <div className="top">
          <Welcome text="The Team" />
        </div>
        <Bar />

        <div className="members">
          <Slider {...settings}>
            <Member 
              source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
              name="Chetankumar S Majjagi" position="Web Developer" 
              Insta="" LinkedIn=""
            />
            <Member 
              source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
              name="Chetankumar S Majjagi" position="Web Developer" 
              Insta="" LinkedIn=""
            />
            <Member 
              source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
              name="Chetankumar S Majjagi" position="Web Developer" 
              Insta="" LinkedIn=""
            />
            <Member 
              source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
              name="Chetankumar S Majjagi" position="Web Developer" 
              Insta="" LinkedIn=""
            />
            <Member 
              source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
              name="Chetankumar S Majjagi" position="Web Developer" 
              Insta="" LinkedIn=""
            />
            <Member 
              source="https://ecell.iiitnr.ac.in/assets/Priyadarshi-BQ75kvD1.jpg"
              name="Chetankumar S Majjagi" position="Web Developer" 
              Insta="" LinkedIn=""
            />
          </Slider>
        </div>
    </div>
  )
}

export default App
