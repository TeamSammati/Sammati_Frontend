import axios from "axios";

const registerURL = `http://172.16.144.47:6969/Request_List/2`

const register = async (registerContent) => {
    const response = await axios.post(registerURL, registerContent)
    return response.data
}
const exportObject = { register }
export default exportObject