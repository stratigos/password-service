import React from "react";
import { shallow } from "enzyme";
import App from "./App"

describe("<App /> Component", () => {

  const testApp = shallow(<App />);

  it("renders its containing div", () => {
    expect( testApp.is("div.App") ).toBe(true);
  });

  it("displays header", () => {
    expect( testApp.text() ).toMatch(/Password Service/);
  });

  it("renders a PasswordComponent child node", () => {
    expect( testApp.text() ).toMatch(/PasswordComponent/);
  });

});
