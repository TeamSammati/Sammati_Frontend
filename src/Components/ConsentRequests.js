import React from 'react'
import './Stylesheets/ConsentRequests.css'
import ConsentRequest from './ConsentRequest'
const ConsentRequests = ({ consentRequests}) => {
  return (
    <div className='ConsentRequestsPage'>
      <div className='ConsentRequestTitle'>
        Consent Requests Yet to Sammati
      </div>
      <div className='ConsentRequestContainer'>
        {
          (consentRequests.length === 0) &&
          <div className='ConsentRequestMessage'>
            No Pending Requests
          </div>
        }
        {
          (consentRequests.length !== 0) &&
          <div>
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
        }

      </div>
    </div>
  )
}

export default ConsentRequests