import React from 'react'

const ConsentRequest = ({cr_id, index, hospital_id, doctor_id}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <th scope="row">{cr_id} </th>
            <td>{hospital_id}</td>
            <td>{doctor_id}</td>
            <td>
                <button type="button" className="btn btn-secondary">Accept</button>
            </td>
            <td>
                <button type="button" className="btn btn-secondary">Deny</button>
            </td>
        </tr>
    )
}

export default ConsentRequest