import React from 'react'
import PageContainer from '../PageContainer'
import '../css/Contact.css'

const Contact = () => {
  return (
    <PageContainer>
      <div>
      <input type="text" placeholder="Name" className='input1'/>
      <input type="email" placeholder="Email" className='input2'/>
      <textarea id="message" name="message" rows="5" cols="30" className='message'placeholder='message'></textarea>
      <button>send</button>
      </div>
      
   </PageContainer>
  )
}

export default Contact