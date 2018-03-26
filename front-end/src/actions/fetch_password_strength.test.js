import fetchPasswordStrength from "./fetch_password_strength";
import { FETCH_PASSWORD_STRENGTH, SET_PASSWORD_STRENGTH } from "../constants/action_types";
import { PASSWORD_STRENGTH_BASE_DOMAIN, API_ENDPOINT_PASSWORD_STRENGTH } from "../constants/api_endpoints";
import * as actionTypes from "../constants/action_types";

describe("Fetch Password Strength ActionCreator", () => {

  const testContent = "abc123";

  const expectedApiEndpoint = PASSWORD_STRENGTH_BASE_DOMAIN + API_ENDPOINT_PASSWORD_STRENGTH;

  const expectedAction = {
    type: actionTypes.FETCH_PASSWORD_STRENGTH,
    payload: {
      url: expectedApiEndpoint,
      content: testContent,
      success: actionTypes.SET_PASSWORD_STRENGTH
    }
  }

  const actualAction = fetchPasswordStrength(testContent);

  it("creates fetching of password strength Action", () => {
    expect(actualAction).toEqual(expectedAction);
  });

});
