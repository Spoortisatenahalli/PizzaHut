import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import MainImage from "../Assets/pizza.jpeg"
import Checkoutmodal from './Checkoutmodal'

const Home = (props) => {

  const[openmodal , setOpenmodal] =useState(false)
  
  function open(){
    setOpenmodal(true)
  }

  function close(){
    setOpenmodal(true)
  }

  return (
    <div className='home' style={{backgroundImage:`url(${MainImage})` }}>
        <div className='headerContainer' >
            <h1> Pedro's Pizzeria</h1>
            <p>PIZZA TO FIT ANY TASTE</p>
        
            <button onClick={open}>ORDER NOW</button>
            {openmodal && <Checkoutmodal handleChange={props.handleChange} userData={props.userData}/>}
        </div>
    </div>
  )
}

export default Home