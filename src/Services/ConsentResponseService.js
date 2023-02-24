import axios from "axios";

const consentResponseURL = `http://172.16.144.47:6969/Request_List/2`

const consentResponse = async (cr_response) => {
    const response = await axios.post(consentResponseURL, cr_response)
    return response.data
}
const exportObject = { consentResponse }
export default exportObject