import React, { useState } from 'react'
import './LoginPage.css'
import Register from './Register'

const LoginPage = ({ LoginStatus }) => {
  const [page, setPage] = useState(1)
  const setLoginStatus = (event) => {
    event.preventDefault()
    LoginStatus()
  }
  return (
    <div>
      {
        (page === 1) &&
        <div className='LoginPage'>
          <div className='LoginContainer'>
            <div className='LoginTitle'>Enter your Credentials</div>
            <div className='LoginForm'>
              <form onSubmit={setLoginStatus}>
                <label for='login-userid' className='InputLabel1'>User Id.</label>
                <input
                  type='text'
                  placeholder='Enter your User Id. ...'
                  className='InputText'
                  id='login-userid'
                  required
                />
                <br />
                <label for='login-userid' className='InputLabel'>Password</label>
                <input
                  type='password'
                  placeholder='Enter your Password ...'
                  className='InputText'
                  id='login-password'
                  required
                />
                <br />
                <button type='submit' className='InputButton'>Login &gt;&gt;</button>
              </form>
            </div>
            <div className='LoginMessage'></div>
            <div className='LoginRegister'>
              <button className='btnRegister' onClick={()=>{setPage(2)}}>Register ?</button>
            </div>
          </div>
        </div>
      }
      {
        (page === 2) && 
        <div className='RegisterPage'>
          <Register/>
          <div className='BackToLogin'>
              <button className='btnPage1Back' onClick={()=>{setPage(1)}}>Back To Login &gt;&gt;</button>
          </div>
        </div>
      }
    </div>

  )
}

export default LoginPage