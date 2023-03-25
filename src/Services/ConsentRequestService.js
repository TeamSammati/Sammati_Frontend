import axios from 'axios'
import configURL from "../Configurations/configURL";

const {consentRequestURL} = configURL;

const getPendingRequests = async (patient) => {
    const response = await axios.get(`${consentRequestURL}?patientId=${patient.patientId}`)
    return response.data
}
const exportObject = { getPendingRequests}

export default exportObject