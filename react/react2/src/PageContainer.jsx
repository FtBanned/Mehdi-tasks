import React from 'react'
import Navbar from './Navbar'

const PageContainer = (props) => {
  return (
    <>
    <Navbar/>
    <main>{props.children}</main>
    </>
   
  )
}

export default PageContainer