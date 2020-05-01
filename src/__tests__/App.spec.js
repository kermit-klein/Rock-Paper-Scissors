import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("App component test", () => {
  const wrapper = shallow(<App />);
  it("Shows correct user name", () => {
    wrapper.setState({ playerName: "Osman" });
    expect(wrapper.find("#playername").text()).toEqual("Osman's Selection");
  });

  it("Hint is hidden when cheat is off", () => {
    wrapper.setState({ cheatMode: false });
    expect(wrapper.find("#cheathint").prop("style")).toHaveProperty(
      "display",
      "none"
    );
  });
});
