import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix_logo.svg'
import search from '../../assets/search.png'
import bell from '../../assets/notification.png'
import profile from '../../assets/netflix_profiles.png'
import drop from '../../assets/arrow_drop_down.png'

const Navbar = () => {
   
  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.screenY >=80  ){
        navRef.current.classList.add('nav-dark')}
        else{
          navRef.current.classList.remove('nav-dark')
        }
      }
)})
  return (
    <div className='Navbar'>
    <div className="NavbarLeft">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
    </div>
    <div className="NavbarRight">
      <img src={search} alt=""  className='icons'/>
      <p>Children</p>
      <img src={bell}alt=""  className='icons'/>
      <div className="Navbar-profile">
      <img src={profile} alt="" className='profile' />
      <img src={drop} alt="" />
      
      <div className="dropdown">
        <p>Sign Out from Netflix</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
