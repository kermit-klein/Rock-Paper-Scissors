import React from "react";

const ComputerView = (props) => {
  let showComp;
  let getStyle;
  console.log("comp pick " + props.computerPick);
  if (props.computerPick === "Rock") {
    showComp = "ROCK";
    getStyle = "rocktext";
  } else if (props.computerPick === "Scissors") {
    showComp = "SCISSORS";
    getStyle = "scissorstext";
  } else if (props.computerPick === "Paper") {
    showComp = "PAPER";
    getStyle = "papertext";
  } else {
    showComp = "???";
    getStyle = "";
  }

  return (
    <p class="slct compselection" id={`${getStyle}`}>
      {showComp}
    </p>
  );
};

export default ComputerView;
