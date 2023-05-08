import React from 'react'
import PageContainer from '../PageContainer'
import '../css/Repos.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
const UserUrl2 = 'https://api.github.com/users/Ali-GreenHeart/repos'

const Repos = () => {
  const [repos, setUsers]= useState([])
  useEffect(() => {
    axios.get(UserUrl2).then(({data}) => {
        setUsers(data.slice(0,10))
  })
  },[])
  return (
    <PageContainer>
      <div className='followerc'>
      {repos.map((repos) => (
          <div className="repos" key={repos.id}>
          <p>{repos.name}</p>
        </div>
        ))}
    </div>
    </PageContainer>
  )
}

export default Repos