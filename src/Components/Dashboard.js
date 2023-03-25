import React from 'react'
import './Stylesheets/Dashboard.css'
import { useNavigate } from 'react-router-dom';
const Dashboard = ({ user }) => {
    const profileLabels = ['Unique Patient Id.','Date of Birth', 'Gender', 'Mobile Number', 'Address']
    const profileValues = [user.patientId,user.dob,user.gender,user.phoneNumber,user.address+' , '+user.state+' , '+user.pinCode]
    const navigate = useNavigate();
    return (
        <div>
            <div className='DashboardPage'>
                <div className='DashboardMain'>
                    <div className='ProfileTitle'>Welcome Back <span className='ProfileName'>{user.firstName} {user.lastName}</span></div>
                    <div className='ProfileContent'>
                        <div className='ProfilePhoto Prof-Col'>ProfilePhoto</div>
                        <div className='ProfileDetais Prof-Col'>
                            {
                                profileLabels.map((label, index) => <p>{label} &emsp;:&emsp; {profileValues[index]}</p>)
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
                        <button onClick={() => { navigate('/consentRequests'); }} className='btnPage2Go'>Goto Requests &gt;&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard