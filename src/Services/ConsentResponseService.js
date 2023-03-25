import axios from "axios";
import configURL from "../Configurations/configURL";

const {consentResponseURL} = configURL;

const consentResponse = async (cr_response) => {
    const response = await axios.post(`${consentResponseURL}?crid=${cr_response.crid}&status=${cr_response.status}`)
    return response.data
}
const exportObject = { consentResponse }
export default exportObject