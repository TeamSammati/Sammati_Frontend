import axios from "axios";

const consentResponseURL = `http://172.16.144.47:6969/Request_List/2`

const consentResponse = async (response) => {
    const response = await axios.post(consentResponseURL, response)
    return response.data
}
const exportObject = { consentResponse }
export default exportObject