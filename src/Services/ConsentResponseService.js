import axios from "axios";

const consentResponseURL = `http://172.16.144.47:6969/response`

const consentResponse = async (cr_response) => {
    const response = await axios.post(`${consentResponseURL}?crid=${cr_response.crid}&status=${cr_response.status}`)
    return response.data
}
const exportObject = { consentResponse }
export default exportObject