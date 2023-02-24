import React, { useState } from 'react'
import ConsentRequests from './ConsentRequests'
import './Stylesheets/Dashboard.css'
const Dashboard = ({user, consentRequests}) => {
    const [page, setPage] = useState(1)
    const profileLabels = ['Unique Patient Id.','Date of Birth', 'Gender', 'Mobile Number', 'Address']
    const profileValues = ['XXX123', '01-Jan-XX00', 'Male', 'XXX95', '4-99/24, Govindaraopet, Mulugu, Telangana - 506344']
    
  return (
    <div>
      {
        (page === 1) && 
        <div className='DashboardPage'>
          <div className='DashboardMain'>
            <div className='ProfileTitle'>Welcome Back <span className='ProfileName'>Boppana Venkatesh</span></div>
            <div className='ProfileContent'>
              <div className='ProfilePhoto Prof-Col'>ProfilePhoto</div>
              <div className='ProfileDetais Prof-Col'>
                {
                profileLabels.map((label, index)=> <p>{label} &emsp;:&emsp; {profileValues[index]}</p>)
                }
              </div>
              <div className='ProfileQR Prof-Col'>ProfileQR</div>
            </div>
          </div>
          <div className='DashboardContent'>
          <div className='HealthDataStatistics'>
          Health Data & Statistics
          </div>
          <div className='ConsentsRequests'>
          Consents & Requests
          <button onClick={()=>{setPage(2)}} className='btnPage2Go'>Goto Requests &gt;&gt;</button>
          </div>
          </div>
        </div>
      }
      {
        (page === 2) &&
        <div className='RequestsPage'>
          <ConsentRequests consentRequests={consentRequests}/>
          <button onClick={()=>{setPage(1)}} className='btnPage2Back'>Goto Dashboard &gt;&gt;</button>
        </div>
      }
    </div>
    
  )
}

export default Dashboard