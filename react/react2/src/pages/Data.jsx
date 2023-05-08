import React from 'react'
import PageContainer from '../PageContainer'
import '../css/Data.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
const UserUrl = 'https://api.github.com/users/Ali-GreenHeart'


const Data = () => {
  const [users, setUsers]= useState([])
  useEffect(() => {
    axios.get(UserUrl).then(({data}) => {
        setUsers(data)
  })
  },[])
  
return (
    <PageContainer>
 <img className='ali' src={users.avatar_url} alt="Profile" />
     <div className='alidata'>
      <h1 className='username'>{users.name}</h1>
      <a className='fol' href='/followers' >Followers: {users.followers}</a>
      <p>Following: {users.following}</p>
      <a className='repos' href='/repos'>Repos: {users.public_repos}</a>
      <p>Location: {users.location}</p>
      <p>Bio: {users.bio}</p>
    </div>
    </PageContainer>
  )
}

export default Data