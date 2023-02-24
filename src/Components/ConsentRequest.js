import React from 'react'
import './Stylesheets/ConsentRequest.css'
const ConsentRequest = ({cr_id, index, hospital_id, doctor_id}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{cr_id} </td>
            <td>{hospital_id}</td>
            <td>{doctor_id}</td>
            <td>
                <button type="button" className="btnAccept">Accept &gt;&gt;</button>
            </td>
            <td>
                <button type="button" className="btnReject">Deny &gt;&gt;</button>
            </td>
        </tr>
    )
}

export default ConsentRequest