import React from "react";
import { shallow } from "enzyme";
import PasswordComponent from "./PasswordComponent";

describe("<PasswordComponent /> Component", () => {

  const testPasswordComponent = shallow(<PasswordComponent />);

  it("renders its containing div", () => {
    expect( testPasswordComponent.is("div.password-strength") ).toBe(true);
  });

  it("displays instructions", () => {
    expect( testPasswordComponent.text() ).toMatch(/enter a password/i);
  });

  it("renders a PasswordInput child node", () => {
    expect( testPasswordComponent.text() ).toMatch(/PasswordInput/);
  });

  it("renders a PasswordStrength child node", () => {
    expect( testPasswordComponent.text() ).toMatch(/PasswordStrength/);
  });

});
