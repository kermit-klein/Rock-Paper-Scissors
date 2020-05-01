import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Pulse = styled.div`
  animation: 2s ${keyframes`${pulse}`} infinite;
`;

class ComputerView extends Component {
  render() {
    let showComp;
    let getStyle;
    if (this.props.computerPick === "Rock") {
      showComp = "ROCK";
      getStyle = "rocktext";
    } else if (this.props.computerPick === "Scissors") {
      showComp = "SCISSORS";
      getStyle = "scissorstext";
    } else if (this.props.computerPick === "Paper") {
      showComp = "PAPER";
      getStyle = "papertext";
    } else {
      showComp = "???";
      getStyle = "";
    }
    return (
      <p class="slct compselection" id={`${getStyle}`}>
        <Pulse>{showComp}</Pulse>
      </p>
    );
  }
}

export default ComputerView;
