import React from 'react'

const CheckoutPage = (props) => {
  return (
    <div className='checkout_container'>
        <h2>Your order has been sucessfully Placed!! </h2>
            <p>Enjoy your Pizza with your loved one</p>
        
     <p>Hey {props.userData && props.userData.name}</p>
     <p>Conatact Deatils {props.userData && props.userData.number}</p>
     <p>Your orderd Will be delivared to {props.userData && props.userData.address}</p>
    </div>
  )
}

export default CheckoutPage