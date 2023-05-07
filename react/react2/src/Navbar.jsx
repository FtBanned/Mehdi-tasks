import React from 'react'
import "./css/Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
    <a href="/">Data</a>
    <a href="/followers">Followers</a>
    <a href="/repos">Repos</a>
      </div>
  </nav>
    
  )
}

export default Navbar