import React from 'react'
import './footer.css'
import Youtube_icon from '../../assets/YOutube.jpg'
import instagram_icon from '../../assets/INSTAGRAM.jpg'
import facebook_icon from '../../assets/Facebook.png'
import X_icon from '../../assets/X.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="Footer-icons">
        <img src={Youtube_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={facebook_icon} alt="" />
        <img src={X_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>GIft Cards</li>
        <li>Investors Relation</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookies Preferences</li>
        <li>Contact Us</li>
        <li>Corporate Information</li>
      </ul>
      <p className="copyright">©1999-2026 Netflix,Inc</p>
    </div>
  )
}

export default Footer
