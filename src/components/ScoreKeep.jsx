import React from "react";

const ScoreKeep = (props) => {
  return (
    <h3 id="currentscore" class="slct">
      {props.playerScore}-{props.computerScore}-{props.tieScore}
    </h3>
  );
};

export default ScoreKeep;
