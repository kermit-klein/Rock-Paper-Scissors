import React from "react";

const ComputerView = (props) => {
  let showComp;
  let getStyle;
  console.log("comp pick " + props.computerPick);
  if (props.computerPick === "Rock") {
    showComp = "ROCK";
    getStyle = "rocktext slct";
  } else if (props.computerPick === "Scissors") {
    showComp = "SCISSORS";
    getStyle = "scissorstext slct";
  } else if (props.computerPick === "Paper") {
    showComp = "PAPER";
    getStyle = "papertext slct";
  } else {
    showComp = "???";
    getStyle = "";
  }

  return <p id={`${getStyle}`}>{showComp}</p>;
};

export default ComputerView;
