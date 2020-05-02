import React from "react";
import { shallow } from "enzyme";
import PlayerView from "../components/PlayerView";

describe("PlayerView component test", () => {
  it("Shows correct rock selection for player", () => {
    const wrapper = shallow(<PlayerView playerPick="Rock" />);
    expect(wrapper.find("p").text()).toEqual("ROCK");
  });
  it("Shows correct paper selection for player", () => {
    const wrapper = shallow(<PlayerView playerPick="Paper" />);
    expect(wrapper.find("p").text()).toEqual("PAPER");
  });
  it("Shows correct scissors selection for player", () => {
    const wrapper = shallow(<PlayerView playerPick="Scissors" />);
    expect(wrapper.find("p").text()).toEqual("SCISSORS");
  });
});
