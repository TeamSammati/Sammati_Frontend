import React from 'react'
import './Stylesheets/ConsentRequest.css'
import consentResponseService from '../Services/ConsentResponseService'

const ConsentRequest = ({ cr_id, index, hospital_id, doctor_id }) => {
    const consentResponseHandler = async (cr_response) => {
        try {
            const response = await consentResponseService.consentResponse(cr_response)
            if (response) {
                alert("Consent Response Given!")
            }
        }
        catch (exception) {
            alert("Failed to give Consent response")
        }
    }
    
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{cr_id} </td>
            <td>{hospital_id}</td>
            <td>{doctor_id}</td>
            <td>
                <button type="button" className="btnAccept" onClick={consentResponseHandler(1)}>Accept &gt;&gt;</button>
            </td>
            <td>
                <button type="button" className="btnReject" onClick={consentResponseHandler(0)}>Deny &gt;&gt;</button>
            </td>
        </tr>
    )
}

export default ConsentRequest