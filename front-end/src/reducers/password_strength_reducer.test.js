import passwordStrengthReducer from "./password_strength_reducer";
import { SET_PASSWORD_STRENGTH } from "../constants/action_types";

describe("passwordStrengthReducer", () => {

  const testContent = "password";

  const expectedInitialRating = "";

  const ratingDouble = "weak";

  const setRatingActionDouble = {
    type: SET_PASSWORD_STRENGTH,
    payload: {
      rating: ratingDouble
    }
  };

  it("should return the initial state", () => {
    expect( passwordStrengthReducer("", {}) ).toEqual(expectedInitialRating);
  });

  it("sets the current password strength", () => {
    expect( passwordStrengthReducer("", setRatingActionDouble) ).toEqual(ratingDouble);
  });

});
