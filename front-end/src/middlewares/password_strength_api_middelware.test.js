import { FETCH_PASSWORD_STRENGTH } from "../constants/action_types";
import passwordStrengthApiMiddleware from "./password_strength_api_middleware";

describe("passwordStrengthApiMiddleware", () => {

  const passwordStrengthResponseBodyDouble = {
    strength: "weaksauce"
  };

  global.fetch = jest.fn().mockImplementation(() => {
    let promiseDouble = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        status: 200,
        json: () => {
          return new Promise((res, rej) => {
            return passwordStrengthResponseBodyDouble;
          });
        }
      });
    });

    return promiseDouble;
  });

  /**
   * Mock the Redux `dispatch` behavior.
   */
  const create = () => {

    // Mock data store
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    };

    // Mock next action call
    const next = jest.fn();

    // Encapsulate call to middleware being tested
    const invoke = (action) => passwordStrengthApiMiddleware(store)(next)(action);

    return { store, next, invoke };
  };

  describe("Redux dispatch behavior", () => {

    it("passes through for irrelevant action", () => {
      const { next, invoke } = create();

      const irrelevantActionDouble = {
        type: "TEST_ACTION",
        payload: {
          url: "TEST_URI_PATH",
          stuff: "nerf",
          success: "TEST_DONT_DO_THINGS"
        }
      };

      invoke(irrelevantActionDouble);

      expect(next).toHaveBeenCalledWith(irrelevantActionDouble);
    });

    xit("passes dispatch() and dispatches update of application state", () => {
      const { store, invoke } = create();

      invoke((dispatch) => {
        dispatch();
      });

      // As in the PasswordInput tests, a spy library like `sinon` is needed to
      //  effectively complete this test. It exists here to exemplify the
      //  middleware behavior.
      expect(store.dispatch).toHaveBeenCalled();
    });

  });

  describe("external API request behavior", () => {

    const expectedActionDouble = {
      type: FETCH_PASSWORD_STRENGTH,
      payload: {
        url: "TEST_PASSWORD_STRENGTH_ENDPOINT",
        content: "p4ssw0rd!",
        success: "TEST_DO_THINGS"
      }
    };

    const expectedApiRequest = expectedActionDouble.payload.url;

    it("calls external API when appropriate action passed in", () => {
      const { invoke } = create();

      invoke(expectedActionDouble);

      expect(global.fetch).toHaveBeenCalledWith(expectedApiRequest, expect.anything());
    });
  });

});
