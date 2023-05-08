import React from 'react'
import "./css/Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
      <div>
    <a className='x' href="/">Data</a>
    <a className='z' href="/followers">Followers</a>
    <a className='y' href="/repos">Repos</a>
      </div>
  </nav>
    
  )
}

export default Navbar