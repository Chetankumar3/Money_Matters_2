import React from 'react'
import './Styling/Team.css'
import Member from './Small components/Member.jsx'
import Welcome from './Small components/Welcome.jsx'

function App(){
  return (
    <div className='Team'>
      <Welcome text="TEAM" className="heading"/>

      <div className="members">
          <Member 
            source="/kaushal.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Kaushal Ranjan" position="Design & Documentation" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/srijan.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Srijan" position="Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/garv.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Garv Bajaj" position="" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/karthik.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Karthik Pandey" position="" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/pranjal.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Pranjal Sharma" position="Head" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/sujal.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Sujal Goel" position="Vice Head" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="vatsal.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Vatsal Shah" position="Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="chetan.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Chetankumar S Majjagi" position="Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/aggarwal.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Pranjal Aggarwal" position="Developer" 
            Insta="" LinkedIn=""
          />
          <Member 
            source="/shrey.jpg"
            // source="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Shrey Omar" position="Developer" 
            Insta="" LinkedIn=""
          />
      </div>
    </div>
  )
}

export default App
