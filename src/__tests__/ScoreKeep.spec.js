import React from "react";
import { shallow } from "enzyme";
import ScoreKeep from "../components/ScoreKeep";

describe("ScoreKeep component test", () => {
  it("Shows correct result when player wins", () => {
    const wrapper = shallow(
      <ScoreKeep playerScore={1} computerScore={0} tieScore={0} />
    );
    expect(wrapper.find("h3").text()).toEqual("1-0-0");
  });
  it("Shows correct result when computer wins", () => {
    const wrapper = shallow(
      <ScoreKeep playerScore={0} computerScore={1} tieScore={0} />
    );
    expect(wrapper.find("h3").text()).toEqual("0-1-0");
  });
  it("Shows correct result when tie", () => {
    const wrapper = shallow(
      <ScoreKeep playerScore={0} computerScore={0} tieScore={1} />
    );
    expect(wrapper.find("h3").text()).toEqual("0-0-1");
  });
});
