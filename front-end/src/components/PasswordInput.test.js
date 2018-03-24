import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import ConnectedPasswordInput, { PasswordInput } from "./PasswordInput";

describe("<PasswordInput /> Component", () => {

  it("renders a password input field", () => {
    expect( shallow(<PasswordInput />).is("input[type='password']") ).toBe(true);
  });

  describe("when decorated with Redux data binding", () => {

    const mockStore = {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => ({})
    };

    const wrapper = mount(
      <Provider store={mockStore}>
        <ConnectedPasswordInput />
      </Provider>
    );

    it("is connected to the data store", () => {
      expect( typeof wrapper.instance().props.store.dispatch ).toBe("function")
    });

    xit("has an onClick handler", () => {
      // Skipping test for now - need to modify class such that `onClick`
      //  attribute is accessible in tests, or include `sinon` library
      //  to spy on events/interactions.
      expect(1).toBe(1);
    });

  });

});
