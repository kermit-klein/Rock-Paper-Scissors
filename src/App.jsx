import React, { Component } from "react";
import "./style.css";
import ComputerView from "./components/ComputerView";
import PlayerView from "./components/PlayerView";
import ResultShow from "./components/ResultShow";
import ScoreKeep from "./components/ScoreKeep";
import { Link } from "react-router-dom";

class App extends Component {
  state = {
    playerPick: "",
    computerPick: "",
    computerFuturePick: "",
    playerScore: 0,
    computerScore: 0,
    tieScore: 0,
    cheatMode: false,
    playerName: "Anonymous",
    whoWon: "",
  };

  componentDidMount() {
    this.setState({
      computerFuturePick: this.computerRandom(),
    });
  }

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
    let winner = this.decideWinner(
      playerSelection,
      this.state.computerFuturePick
    );
    this.setState({
      playerPick: playerSelection,
      whoWon: winner,
      computerPick: this.state.computerFuturePick,
    });

    if (winner === "Player") {
      this.setState({ playerScore: this.state.playerScore + 1 });
    } else if (winner === "Computer") {
      this.setState({ computerScore: this.state.computerScore + 1 });
    } else {
      this.setState({ tieScore: this.state.tieScore + 1 });
    }
    let computerSelection = this.computerRandom();
    this.setState({ computerFuturePick: computerSelection });
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

  cheater = () => {
    this.setState({ cheatMode: !this.state.cheatMode });
  };

  changePlayer = () => {
    let name = prompt("Enter your name here please");
    if (!name) {
      name = "Anonymous";
    }
    this.setState({ playerName: name });
    this.reset();
  };

  saveResult = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const storage = window.localStorage;
    let scoreInfo = { ...this.state, ...{ date: date } };
    let scoreData = JSON.parse(storage.getItem("scoreData")) || [];
    scoreData.push(scoreInfo);
    storage.setItem("scoreData", JSON.stringify(scoreData));
    alert("Score saved!");
  };

  render() {
    let cheatStyle;
    if (this.state.cheatMode) {
      cheatStyle = {};
    } else {
      cheatStyle = { display: "none" };
    }
    return (
      <React.Fragment>
        <h1 id="header">THE ULTIMATE ROCK, PAPER, SCISSORS</h1>
        <div class="gamemenu">
          <button
            id="nwply"
            class="ui circular nwply big button"
            onClick={this.changePlayer}
          >
            Change Player
          </button>
          <button
            id="rgame"
            class="ui circular rgame big button"
            onClick={this.reset}
          >
            Reset Game
          </button>
          <button
            id="sresult"
            class="ui circular sresult big button"
            onClick={this.saveResult}
          >
            Save Score
          </button>
          <Link to="/viewscores">
            <button id="vscore" class="ui circular vscore big button">
              View Scores
            </button>
          </Link>
          <div class="selection">
            <h3 id="cheat">CHEAT</h3>
            <label class="switch">
              <input id="cheatBtn" type="checkbox" onChange={this.cheater} />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div className="ui container">
          <div class="row">
            <div class="column left">
              <h2 id="playername">{this.state.playerName}'s Selection</h2>
              <PlayerView playerPick={this.state.playerPick} />
              <p id="cheathint" style={cheatStyle}>
                <i class="user secret icon"></i> Computer will select:
                {this.state.computerFuturePick}
              </p>
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
