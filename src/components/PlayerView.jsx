import React from "react";

const PlayerView = (props) => {
  let showPlayer;
  let getStyle;
  console.log("comp pick " + props.playerPick);
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
      {showPlayer}
    </p>
  );
};

export default PlayerView;
