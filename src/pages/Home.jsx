import React from 'react'
import OnStart from '../components/OnStart'
import NavBar from '../components/navBar'
import {useNavigate } from "react-router-dom";

function Home() {

 
  let navigate = useNavigate()
    return (
  <>
  <div className='recolor'>
  <NavBar />
  </div>
  <div className='flex'>
<OnStart/>

<button className='home-btn' onClick={() => navigate("/search")}>
  Search Movies
</button>
</div>
</>
  
  )
}

export default Home