import React from 'react'
import PageContainer from '../PageContainer'
import '../css/Followers.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
const UserUrl1 = 'https://api.github.com/users/Ali-GreenHeart/followers'

const Followers = () => {
  const [followers, setUsers]= useState([])
  useEffect(() => {
    axios.get(UserUrl1).then(({data}) => {
        setUsers(data)
  })
  },[])
  return (
    <PageContainer>
      <div className='followerc'>
      {followers.map((follower) => (
          <div className="follower" key={follower.id}>
          <p>{follower.login}</p>
          <img src={follower.avatar_url} alt={follower.login} />
        </div>
        ))}
    </div>
    </PageContainer>
  )
}

export default Followers