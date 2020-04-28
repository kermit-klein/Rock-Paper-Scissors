import React from "react";

const ComputerView = (props) => {
  console.log("comp pick " + props.computerPick);
  if (props.computerPick === "Rock") {
    var showComp = "ROCK";
    var getStyle = "rocktext slct";
  } else if (props.computerPick === "Scissors") {
    var showComp = "SCISSORS";
    var getStyle = "scissorstext slct";
  } else if (props.computerPick === "Paper") {
    var showComp = "PAPER";
    var getStyle = "papertext slct";
  } else {
    var showComp = "???";
    var getStyle = "";
  }

  return <p id={`${getStyle}`}>{showComp}</p>;
};

export default ComputerView;
