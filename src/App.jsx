import React, { Component } from "react";
import "./style.css";
import ComputerView from "./components/ComputerView";
import PlayerView from "./components/PlayerView";
import ResultShow from "./components/ResultShow";
import ScoreKeep from "./components/ScoreKeep";

class App extends Component {
  state = {
    playerPick: "",
    computerPick: "",
    playerScore: 0,
    computerScore: 0,
    tieScore: 0,
    cheatMode: false,
    playerName: "",
    whoWon: "",
  };

  decideWinner = (player, computer) => {
    if (
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Rock" && computer === "Scissors")
    ) {
      return "Player";
    } else if (player === computer) {
      return "Tie";
    } else {
      return "Computer";
    }
  };

  computerRandom = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let roll = getRandomInt(3);
    if (roll === 0) {
      return "Rock";
    } else if (roll === 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
  };

  runGame = (e) => {
    let playerSelection = e.currentTarget.name;
    let computerSelection = this.computerRandom();
    let winner = this.decideWinner(playerSelection, computerSelection);

    this.setState({
      playerPick: playerSelection,
      computerPick: computerSelection,
      whoWon: winner,
    });

    if (winner === "Player") {
      this.setState({ playerScore: this.state.playerScore + 1 });
    } else if (winner === "Computer") {
      this.setState({ computerScore: this.state.computerScore + 1 });
    } else {
      this.setState({ tieScore: this.state.tieScore + 1 });
    }
  };

  reset = () => {
    this.setState({
      playerPick: "",
      computerPick: "",
      playerScore: 0,
      computerScore: 0,
      tieScore: 0,
      cheatMode: false,
      whoWon: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 id="header">THE ULTIMATE ROCK, PAPER, SCISSORS</h1>
        <div class="gamemenu">
          <button id="nwply" class="ui circular nwply big button">
            New Player
          </button>
          <button
            id="rgame"
            class="ui circular rgame big button"
            onClick={this.reset}
          >
            Reset Game
          </button>
          <button id="vscore" class="ui circular vscore big button">
            View Scores
          </button>
          <div class="selection">
            <h3 id="cheat">CHEAT</h3>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div className="ui container">
          <div class="row">
            <div class="column left">
              <h2>Player's Selection</h2>
              <PlayerView playerPick={this.state.playerPick} />
              <p id="cheathint">Computer will select:</p>
            </div>
            <div class="column middle">
              <h2>Score</h2>
              <ScoreKeep
                playerScore={this.state.playerScore}
                computerScore={this.state.computerScore}
                tieScore={this.state.tieScore}
              />
              <ResultShow whoWon={this.state.whoWon} />
            </div>
            <div class="column right">
              <h2>Computer's Selection</h2>
              <ComputerView computerPick={this.state.computerPick} />
            </div>
          </div>
        </div>

        <div className="ui text container">
          <div class="btn-selection">
            <button
              class="selections"
              id="rock"
              name="Rock"
              onClick={this.runGame}
            >
              <p id="rocktext">ROCK</p>
            </button>
            <button
              class="selections"
              id="paper"
              name="Paper"
              onClick={this.runGame}
            >
              <p id="papertext">PAPER</p>
            </button>
            <button
              class="selections"
              id="scissors"
              name="Scissors"
              onClick={this.runGame}
            >
              <p id="scissorstext">SCISSORS</p>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
