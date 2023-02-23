import React, { useState } from 'react'
import ConsentRequests from './ConsentRequests'
import './Dashboard.css'
const Dashboard = ({LoginStatus}) => {
    const [page, setPage] = useState(1)
    const Logout = () => {
        LoginStatus()
    }
  return (
    <div>
      {
        (page === 1) && 
        <div className='DashboardPage'>
          <div className='DashboardMain'>
            Profile
          </div>
          <div className='DashboardContent'>
          <div className='HealthDataStatistics'>
          Health Data & Statistics
          </div>
          <div className='ConsentsRequests'>
          Consents & Requests
          <button onClick={()=>{setPage(2)}}>Goto Requests &gt;&gt;</button>
          </div>
          </div>
          <button onClick={Logout}>Logout</button>
        </div>
      }
      {
        (page === 2) &&
        <div className='RequestsPage'>
          <ConsentRequests/>
          <button onClick={()=>{setPage(1)}} className='btnPage2Back'>Goto Dashboard &gt;&gt;</button>
        </div>
      }
    </div>
    
  )
}

export default Dashboard