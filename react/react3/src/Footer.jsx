import React, { useContext } from 'react'
import "./css/Footer.css"
import { AuthContext } from './ContextApi/AuthContext'


const Footer = () => {
  const {username,email} = useContext(AuthContext)
    return (
    <footer className='footer'>
    <p className='context'><span>{username}</span>{email}</p>
    </footer>
  )
}

export default Footer