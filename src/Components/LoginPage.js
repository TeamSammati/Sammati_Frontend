import React from 'react'
import './LoginPage.css'

const LoginPage = ({ LoginStatus }) => {
  const setLoginStatus = (event) => {
    event.preventDefault()
    LoginStatus()
  }
  return (
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
            <br/>
            <button type='submit' className='InputButton'>Login &gt;&gt;</button>
          </form>
        </div>
        <div className='LoginMessage'></div>
      </div>
    </div>
  )
}

export default LoginPage