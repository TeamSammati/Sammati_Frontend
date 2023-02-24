import React, { useState } from 'react'
import './Stylesheets/Register.css'
import registerService from '../Services/RegisterService'
const Register = () => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [dob, setDob] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [address1, setAddress1] = useState('')
  const [pin, setPIN] = useState('')
  const [state, setState] = useState('')
  const [passPhoto, setPassPhoto] = useState(null)
  const [uid, setUid] = useState('')
  const [uidType, setUidType] = useState('')
  const [uName, setUName] = useState('')
  const [pwd, setPwd] = useState('')
  const [rpwd, setRPwd] = useState('')


  const registerHandler = async (registerContent) => {
    try {
      const response = await registerService.register(registerContent)
      if (response) {
        alert("Registration Successful! You can Login Now...")
      }
      window.location.reload(true)
    }
    catch (exception) {
      alert("Log in failed, check username and password entered")
      window.location.reload(true)
    }
  }
  const handleRegister = (event) => {
    event.preventDefault()
    const registerContent = {
      fname, lname, dob, mobile, email, gender, address1, pin, state, passPhoto, uid, uidType, uName, pwd, rpwd
    }
    registerHandler(registerContent)

    setFname('')
    setLname('')
    setDob('')
    setMobile('')
    setEmail('')
    setGender('')
    setAddress1('')
    setPIN('')
    setState('')
    setPassPhoto(null)
    setUid('')
    setUidType('')
    setUName('')
    setPwd('')
    setRPwd('')
  }

  return (
    <div className='RegisterPage'>
      <div className='RegisterTitle'>Public (Patient) Self Registration Form</div>
      <div className='RegisterContainer'>
        <form onSubmit={handleRegister}>
          <div className='RegisterSection1'>
            <h4>Get Started!</h4>
            <div className='RegisterRow'>
              <div className='RegisterCol'>
                <label className='InputLabel'>First Name (*)</label>
                <input
                  type='text'
                  className='InputText'
                  value={fname}
                  onChange={event => setFname(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Last / Sur Name (*)</label>
                <input
                  type='text'
                  className='InputText'
                  value={lname}
                  onChange={event => setLname(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Date of Birth (*)</label>
                <input
                  type='date'
                  className='InputText'
                  value={dob}
                  onChange={event => setDob(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className='RegisterRow'>
              <div className='RegisterCol'>
                <label className='InputLabel'>Mobile No. (*)</label>
                <input
                  type='text'
                  className='InputText'
                  value={mobile}
                  onChange={event => setMobile(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Email Id. (*)&emsp;&emsp;&emsp;&nbsp;</label>
                <input
                  type='email'
                  className='InputText'
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Gender (*)&emsp;&emsp;&nbsp;</label>
                <select
                  className='InputText'
                  value={gender}
                  onChange={event => setGender(event.target.value)}
                  required
                >
                  <option value='N' disabled>Select Gender</option>
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                  <option value='O'>Others</option>
                </select>
              </div>
            </div>
            <div className='RegisterRow'>
              <div className='RegisterCol'>
                <label className='InputLabel'>Address (*)&emsp;</label>
                <input
                  type='text'
                  className='InputText'
                  value={address1}
                  onChange={event => setAddress1(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Area / PIN (*) &emsp;&emsp;&nbsp;</label>
                <input
                  type='text'
                  className='InputText'
                  value={pin}
                  onChange={event => setPIN(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>State (*)&emsp;&emsp;&emsp;</label>
                <select
                  className='InputText'
                  value={state}
                  onChange={event => setState(event.target.value)}
                  required
                >
                  <option value='N' disabled>Select State</option>
                  <option value='KA'>Karnataka</option>
                  <option value='AP'>Andhra Pradesh</option>
                  <option value='MH'>Maharastra</option>
                  <option value='GJ'>Gujarat</option>
                  <option value='TS'>Telangana</option>
                  <option value='PN'>Panjab</option>
                </select>
              </div>
            </div>
            <div className='RegisterRow'>
              <div className='RegisterCol'>
                <label className='InputLabel'>PassPhoto</label>
                <input
                  type='file'
                  className='InputText'
                  value={passPhoto}
                  onChange={event => setPassPhoto(event.target.value)}
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Unique ID. No. (*)&nbsp;</label>
                <input
                  type='text'
                  className='InputText'
                  value={uid}
                  onChange={event => setUid(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>UID. Type (*)&emsp;</label>
                <select
                  className='InputText'
                  value={uidType}
                  onChange={event => setUidType(event.target.value)}
                  required
                >
                  <option value='A' disabled>Select Type</option>
                  <option value='IT1'>Aadhar</option>
                  <option value='IT2'>Voter Id.</option>
                  <option value='IT3'>PAN</option>
                </select>
              </div>
            </div>
          </div>
          <div className='RegisterSection2'>
            <h4>Set Login Credentials</h4>
            <div className='RegisterRow'>
              <div className='RegisterCol'>
                <label className='InputLabel'>Username (*)</label>
                <input
                  type='text'
                  className='InputText'
                  value={uName}
                  onChange={event => setUName(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Password (*)</label>
                <input
                  type='password'
                  className='InputText'
                  value={pwd}
                  onChange={event => setPwd(event.target.value)}
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>ReType Password (*)</label>
                <input
                  type='password'
                  className='InputText'
                  value={rpwd}
                  onChange={event => setRPwd(event.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          <button type='submit' className='InputButton'>Submit &gt;&gt;</button>
        </form>

      </div>
    </div>
  )
}

export default Register