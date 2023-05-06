import React from 'react'
import "./css/Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
      <a href="/">Home</a>
     <a href="/about">About</a>
     <a href="/contact">Contact</a>
      </div>
  </nav>
    
  )
}

export default Navbar