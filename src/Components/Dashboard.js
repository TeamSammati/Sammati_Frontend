import React from 'react'
import ConsentRequests from './ConsentRequests'
import './Stylesheets/Dashboard.css'
const Dashboard = ({user, consentRequests, currPage, setCurrPage}) => {
    // const [page, setPage] = useState(1)
    const profileLabels = ['Unique Patient Id.','Date of Birth', 'Gender', 'Mobile Number', 'Address']
    const profileValues = [user.patientId,user.dob,user.gender,user.phoneNumber,user.address+' , '+user.state+' , '+user.pinCode]
  return (
    <div>
      {
        (currPage === 1) && 
        <div className='DashboardPage'>
          <div className='DashboardMain'>
            <div className='ProfileTitle'>Welcome Back <span className='ProfileName'>{user.firstName} {user.lastName}</span></div>
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
          <button onClick={()=>{setCurrPage(2); window.localStorage.setItem('currPage', JSON.stringify(2)) }} className='btnPage2Go'>Goto Requests &gt;&gt;</button>
          </div>
          </div>
        </div>
      }
      {
        (currPage === 2) &&
        <div className='RequestsPage'>
          <ConsentRequests consentRequests={consentRequests} page={currPage} setPage={setCurrPage}/>
          <button onClick={()=>{setCurrPage(1); window.localStorage.setItem('currPage', JSON.stringify(1)) }} className='btnPage2Back'>Goto Dashboard &gt;&gt;</button>
        </div>
      }
    </div>
    
  )
}

export default Dashboard