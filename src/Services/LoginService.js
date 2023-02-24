import axios from "axios";

const loginURL = `http://172.16.144.47:6969/Request_List/2`

const login = async (loginCredentials) => {
    console.log(loginCredentials)
    const response = await axios.post(loginURL, loginCredentials)
    return response.data
}
const exportObject = { login }
export default exportObject