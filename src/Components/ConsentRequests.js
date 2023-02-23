import React from 'react'
import './ConsentRequests.css'
import axios from 'axios'
const ConsentRequests = () => {
  const getCRURL = `http://172.16.144.47:6969/Request_List/2`
  const getCRURLReq = async() => {
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
    <div className='ConsentRequestsPage'>Consent Requests</div>
  )
}

export default ConsentRequests