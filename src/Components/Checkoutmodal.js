import React, { useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom';

const Checkoutmodal = (props) => {

  const [close, setClose] = useState(true)

  // function closed() {
  //   setClose(!true)
  // }
  return (
    <>
      <div className='overlay'>

        <h2> Welcome to our Pizza Zone !! 
                Enjoy your pizza
        </h2>
        <form className='form'>

          <div><input onChange={(e)=>props.handleChange(e)} type="text" placeholder="Enter your name" name="name" /> </div>
          <div><input   onChange={(e)=>props.handleChange(e)} type="text" placeholder="Enter your Phone number" name="number" /></div>
          <div>  <input onChange={(e)=>props.handleChange(e)} type="text" placeholder="Enter your Adress" name="address" /></div>

          <Link to="/checkout">Buy Now</Link>
          <button>Back</button>

        </form>


      </div>
    </>
  )
}

export default Checkoutmodal