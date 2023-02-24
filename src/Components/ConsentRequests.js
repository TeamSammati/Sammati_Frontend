import React from 'react'
import './Stylesheets/ConsentRequests.css'
import axios from 'axios'
import ConsentRequest from './ConsentRequest'
const ConsentRequests = () => {
  const consentRequests = [
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
    {cr_id: 1, hospital_id : 1, doctor_id: 1, cr_status: "Pending"},
  ]
  const getCRURL = `http://172.16.144.47:6969/Request_List/2`
  const getCRURLReq = async () => {
    await axios.get(getCRURL)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  getCRURLReq()
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
            {consentRequests.map((consentRequest, index) => (
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