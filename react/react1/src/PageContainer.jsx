import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const PageContainer = (props) => {
  return (
    <>
    <Navbar/>
    <main>{props.children}</main>
    <Footer/>
    </>
   
  )
}

export default PageContainer