import React from "react";
import { shallow } from "enzyme";
import ResultShow from "../components/ResultShow";

describe("ResultShow component test", () => {
  it("Shows correct result when player wins", () => {
    const wrapper = shallow(<ResultShow whoWon="Player" />);
    expect(wrapper.find("p").text()).toEqual("Player Wins");
  });
  it("Shows correct result when computer wins", () => {
    const wrapper = shallow(<ResultShow whoWon="Computer" />);
    expect(wrapper.find("p").text()).toEqual("Computer Wins");
  });
  it("Shows correct result when tie", () => {
    const wrapper = shallow(<ResultShow whoWon="Tie" />);
    expect(wrapper.find("p").text()).toEqual("It's a Tie");
  });
});
