import React from 'react'
import './Stylesheets/ConsentRequests.css'
import ConsentRequest from './ConsentRequest'
const ConsentRequests = ({consentRequests}) => {
  const consentRequests1 = [
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
  ]
  
  return (
    <div className='ConsentRequestsPage'>
      <div className='ConsentRequestTitle'>
        Consent Requests Yet to Sammati
      </div>
      <div className='ConsentRequestContainer'>
        <table className="ConsentRequestTable">
          <thead>
            <tr>
              <th scope="col">Sl. No.</th>
              <th scope="col">Consent Request Id.</th>
              <th scope="col">Hospital Id.</th>
              <th scope="col">Doctor Id.</th>
              <th scope="col">Accept</th>
              <th scope="col">Deny</th>
            </tr>
          </thead>
          <tbody>
            {consentRequests1.map((consentRequest, index) => (
              <ConsentRequest
              {...consentRequest}
              index={index}
              key={index}
              />
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ConsentRequests