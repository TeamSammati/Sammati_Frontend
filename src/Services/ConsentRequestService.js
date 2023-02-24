import axios from 'axios'

const consentRequestURL = `http://172.16.144.47:6969/Request_List`

const getPendingRequests = async (patient) => {
    const response = await axios.get(`${consentRequestURL}?patientId=${patient.patientId}`)
    return response.data
}
const exportObject = { getPendingRequests}

export default exportObject