import React from "react";

const ResultShow = (props) => {
  if (props.whoWon === "Player") {
    return <p class="result">Player Wins</p>;
  } else if (props.whoWon === "Computer") {
    return <p class="result">Computer Wins</p>;
  } else if (props.whoWon === "Tie") {
    return <p class="result">It's a Tie</p>;
  } else {
    return <p></p>;
  }
};

export default ResultShow;
