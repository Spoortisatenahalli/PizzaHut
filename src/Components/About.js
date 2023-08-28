import React from 'react'
import MainImage from "../Assets/pizza.jpeg"

const About = () => {
    
  return (
    <div>
        <h2 className='about_container'>We are Pizza Family with good background of selling the pizza</h2>
        <p className='about_container'>Here are the pizza makers</p>
        <ul className='about_container'>
            <li>Rahul</li>
            <li>Praveen</li>
            <li>Spoorti</li>
        </ul>

        <img src={MainImage} alt="no"/>
    </div>
  )
}

export default About