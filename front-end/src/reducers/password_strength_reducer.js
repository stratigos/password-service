import { SET_PASSWORD_STRENGTH } from '../constants/action_types';

const passwordStrengthReducer = (rating = "", action) => {
  switch (action.type) {
    case SET_PASSWORD_STRENGTH:
      return action.payload.rating;
  }

  return rating;
};

export default passwordStrengthReducer;
