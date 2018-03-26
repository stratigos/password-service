import React from "react";
import { mount } from "enzyme";
import PasswordStrength from "./PasswordStrength";

describe("<PasswordStrength /> Component", () => {

  const testRating = "weaksauce";
  const testPasswordStrength = mount(<PasswordStrength rating={testRating} />);

  it("renders its containing div", () => {
    expect( testPasswordStrength.render().is("div.password-strength-result") ).toBe(true);
  });

  it("has a 'rating' prop", () => {
    expect( Object.keys(testPasswordStrength.props()) ).toContain("rating");
  });

  it("has a text with CSS class matching the current rating", () => {
    expect( testPasswordStrength.render().find("p").first().hasClass(testRating) ).toBe(true);
  });


});
