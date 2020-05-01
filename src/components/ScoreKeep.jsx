import React from "react";

const ScoreKeep = (props) => {
  return (
    <h3 id="currentscore" class="slct">
      <span style={{ color: "green" }}>{props.playerScore}</span>-
      <span style={{ color: "red" }}>{props.computerScore}</span>-
      <span>{props.tieScore}</span>
    </h3>
  );
};

export default ScoreKeep;
