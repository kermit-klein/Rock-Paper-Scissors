import React from "react";

const PlayerView = (props) => {
  console.log("player pick " + props.playerPick);
  if (props.playerPick === "Rock") {
    return <p id="rocktext slct">ROCK</p>;
  } else if (props.playerPick === "Scissors") {
    return <p id="scissorstext slct">SCISSORS</p>;
  } else if (props.playerPick === "Paper") {
    return <p id="papertext slct">PAPER</p>;
  } else {
    return <p id="papertext slct">???</p>;
  }
};

export default PlayerView;
