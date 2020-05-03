import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import { BrowserRouter as Router } from "react-router-dom";

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

describe("App component mount test", () => {
  let describedComponent = mount(
    <Router>
      <App />
    </Router>
  );
  it("shows correct result when player wins", () => {
    describedComponent.find("#rock").simulate("click");
    describedComponent.setState({
      playerPick: "Rock",
      computerPick: "Scissors",
      playerScore: 1,
      computerScore: 0,
      tieScore: 0,
    });
    describedComponent = describedComponent.update();

    expect(describedComponent.find("#currentscore").text()).toEqual("1-0-0");
  });
});
