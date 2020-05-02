import React from "react";
import { shallow } from "enzyme";
import ComputerView from "../components/ComputerView";

describe("ComputerView component test", () => {
  it("Shows correct rock selection for computer", () => {
    const wrapper = shallow(<ComputerView computerPick="Rock" />);
    expect(wrapper.find("p").text()).toEqual("ROCK");
  });
  it("Shows correct paper selection for computer", () => {
    const wrapper = shallow(<ComputerView computerPick="Paper" />);
    expect(wrapper.find("p").text()).toEqual("PAPER");
  });
  it("Shows correct scissors selection for computer", () => {
    const wrapper = shallow(<ComputerView computerPick="Scissors" />);
    expect(wrapper.find("p").text()).toEqual("SCISSORS");
  });
});
