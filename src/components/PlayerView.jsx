import React from "react";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const Pulse = styled.div`
  animation: 2s ${keyframes`${pulse}`} infinite;
`;

const PlayerView = (props) => {
  let showPlayer;
  let getStyle;
  if (props.playerPick === "Rock") {
    showPlayer = "ROCK";
    getStyle = "rocktext";
  } else if (props.playerPick === "Scissors") {
    showPlayer = "SCISSORS";
    getStyle = "scissorstext";
  } else if (props.playerPick === "Paper") {
    showPlayer = "PAPER";
    getStyle = "papertext";
  } else {
    showPlayer = "???";
    getStyle = "";
  }

  return (
    <p class="slct playerselection" id={`${getStyle}`}>
      <Pulse>{showPlayer}</Pulse>
    </p>
  );
};

export default PlayerView;
