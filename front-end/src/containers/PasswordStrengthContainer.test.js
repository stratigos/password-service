import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import PasswordStrengthContainer from "./PasswordStrengthContainer";

describe("<PasswordStrengthContainer /> Component", () => {

  describe("when decorated with Redux data binding", () => {

    const mockStore = {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({})
    };

    const mountedWrapper = mount(
      <Provider store={mockStore}>
        <PasswordStrengthContainer />
      </Provider>
    );

    const shallowWrapper = shallow(
      <Provider store={mockStore}>
        <PasswordStrengthContainer/>
      </Provider>
    );

    it("is connected to the data store", () => {
      expect( typeof mountedWrapper.instance().props.store ).toBe("object");
    });

    it("wraps the PasswordStrength component", () => {
      expect( shallowWrapper.text() ).toMatch(/PasswordStrength/);
    });

  });

});
