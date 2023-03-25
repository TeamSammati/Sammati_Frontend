import axios from "axios";
import configURL from "../Configurations/configURL";

const {loginURL} = configURL;

const login = async (loginCredentials) => {
    const response = await axios.post(loginURL, loginCredentials)
    return response.data
}
const exportObject = { login }
export default exportObject