import React from 'react'
import Welcome from './Small components/Welcome'
import Bar from './Small components/bar'
import Sub from './Small components/sub'
import './Styling/About.css'

function About() {
  return (
    <div className='About'>
        <div className="text">
            <Welcome text="About Us"/>
            <Bar />
            <Sub className="sub" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa molestias voluptas ullam inventore, facere animi ut cupiditate illum? Sint, quo et quidem molestiae dolorum nesciunt qui ex culpa nisi iusto nostrum, officia, ducimus laboriosam cupiditate voluptatibus. Cupiditate consequatur cum, perferendis vero quasi fuga amet dolor, cumque aliquam est voluptatibus placeat sit. Architecto vel harum praesentium saepe consequuntur ipsum sint voluptate quia fuga necessitatibus tenetur dolore, exercitationem cupiditate sequi quo quibusdam mollitia autem consequatur. Doloribus voluptatum sapiente cumque laudantium repudiandae veritatis excepturi ut eius. Esse, quasi autem similique, eos ad praesentium, nemo cumque maiores totam nesciunt accusantium quisquam assumenda quo doloremque velit debitis ab quod dolores accusamus mollitia quibusdam. Reprehenderit sint doloribus dolores omnis odit nobis quaerat et porro vel, sunt magni optio. Fugit, dignissimos?" /> 
        </div>
    </div>
  )
}

export default About