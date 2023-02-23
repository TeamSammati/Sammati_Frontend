import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='RegisterPage'>
      <div className='RegisterTitle'>Public (Patient) Self Registration Form</div>
      <div className='RegisterContainer'>
        <form>
          <div className='RegisterSection1'>
            <h4>Get Started!</h4>
            <div className='RegisterRow'>
              <div className='RegisterCol'>
                <label className='InputLabel'>First Name (*)</label>
                <input
                  type='text'
                  className='InputText'
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Last / Sur Name (*)</label>
                <input
                  type='text'
                  className='InputText'
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Date of Birth (*)</label>
                <input
                  type='date'
                  className='InputText'
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
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Email Id. (Optional)</label>
                <input
                  type='email'
                  className='InputText'
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Gender (*)&emsp;&emsp;&nbsp;</label>
                <select className='InputText' required>
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
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Area / PIN (*) &emsp;&emsp;&nbsp;</label>
                <input
                  type='text'
                  className='InputText'
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>State (*)&emsp;&emsp;&emsp;</label>
                <select className='InputText' required>
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
                <label className='InputLabel'>PassPhoto (*)</label>
                <input
                  type='file'
                  className='InputText'
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Unique ID. No. (*)&nbsp;</label>
                <input
                  type='text'
                  className='InputText'
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>UID. Type (*)&emsp;</label>
                <select className='InputText' required>
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
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>Password (*)</label>
                <input
                  type='password'
                  className='InputText'
                  required
                />
              </div>
              <div className='RegisterCol'>
                <label className='InputLabel'>ReType Password (*)</label>
                <input
                  type='password'
                  className='InputText'
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