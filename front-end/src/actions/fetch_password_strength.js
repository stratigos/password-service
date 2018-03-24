import { FETCH_PASSWORD_STRENGTH, SET_PASSWORD_STRENGTH } from "../constants/action_types";
import { PASSWORD_STRENGTH_BASE_DOMAIN, API_ENDPOINT_PASSWORD_STRENGTH } from "../constants/api_endpoints";

const fetchPasswordStrength = (content) => ({
  type: FETCH_PASSWORD_STRENGTH,
  payload: {
    url: PASSWORD_STRENGTH_BASE_DOMAIN + API_ENDPOINT_PASSWORD_STRENGTH,
    content: content,
    success: SET_PASSWORD_STRENGTH
  }
});

export default fetchPasswordStrength;
