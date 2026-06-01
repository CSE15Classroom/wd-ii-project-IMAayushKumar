import React from 'react'
import './Login.css'
import logo from '../../assets/netflix_logo.svg'

const Login = () => {
  return (
    <div className='Login'>
      <img src={logo} alt=""  className='login-logo'/>
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button>Sign In</button>
    </form>
        <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          <p>Need Help?</p>
          <div className="form-switch">
            <p>New to Netflix? <span>Sign Up Now</span></p>
            <p>Already have an account <span>Sign In Now</span></p>
          </div>
              
        </div>
      </div>
    </div>
  )}


export default Login
