import React from 'react'
import Logo from '../Assets/pizzaLogo.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <img src={Logo} />
            </div>
            <div className='search_container'>
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" />

                </form>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

        </div>
    )
}

export default Navbar