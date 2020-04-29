import React, { Component } from "react";
class ComputerView extends Component {
  render() {
    let showComp;
    let getStyle;
    if (this.props.computerPick === "Rock") {
      showComp = "ROCK";
      getStyle = "rocktext";
    } else if (this.props.computerPick === "Scissors") {
      showComp = "SCISSORS";
      getStyle = "scissorstext";
    } else if (this.props.computerPick === "Paper") {
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
  }
}

export default ComputerView;
