import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 1s ${keyframes`${bounce}`};
`;

const ResultShow = (props) => {
  if (props.whoWon === "Player") {
    return (
      <p style={{ color: "green" }} class="result">
        <Bounce>Player Wins</Bounce>
      </p>
    );
  } else if (props.whoWon === "Computer") {
    return (
      <p style={{ color: "red" }} class="result">
        Computer Wins
      </p>
    );
  } else if (props.whoWon === "Tie") {
    return <p class="result">It's a Tie</p>;
  } else {
    return <p></p>;
  }
};

export default ResultShow;
