import React from "react";
import { shallow } from "enzyme";

import PasswordContainer from "./PasswordContainer";

describe("<PasswordContainer /> Component", () => {

  describe("as a stateless functional component", () => {

    it("is a function", () => {
      expect( typeof PasswordContainer ).toEqual("function");
    });

  });

  it("does not have propTypes defined", () => {
    expect( shallow(<PasswordContainer />).propTypes ).toBeUndefined();
  });

  it("does not have defaultProps", () => {
    expect( shallow(<PasswordContainer />).defaultProps ).toBeUndefined();
  });

  it("renders its containing div", () => {
    expect( shallow(<PasswordContainer />).is("div.password-strength") ).toBe(true);
  });

  it("displays text about the site", () => {
    expect( shallow(<PasswordContainer />).text() ).toMatch(/enter a password/i);
  });

});
