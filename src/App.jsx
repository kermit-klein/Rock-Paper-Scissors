import React, { Component } from "react"
import "./style.css";

class App extends Component {

  state = {
     playerSelection:"",
     compSelection:"",
     latestScore:{player:0,computer:0},
     cheatMode:{playerCheat:false,computerCheat:false},
     playerName:""
   }

  
runGame = (e) => {

let playerSelection = event.target.value
let computerSelection = computerRandom()

}

decideWinner = (player,computer) => {

}

computerRandom = () => {
  var roll = Math.random();
  if (roll <= 0.34) {
      return "Rock"
  } else if (roll <= 0.67) {
      return "Paper"
  } else {
      return "Scissors"
  }
}


  render() {
    return (

 <React.Fragment>
    <h1 id="header">THE  ULTIMATE  ROCK, PAPER, SCISSORS</h1>
    <div class="gamemenu">
      <button id="nwply" class="ui circular nwply big button">New Player</button>
      <button id="rgame" class="ui circular rgame big button">Reset Game</button>
      <button id="vscore" class="ui circular vscore big button">View Scores</button>
      <div class="selection"><h3 id="cheat">CHEAT</h3>
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    
    <div className="ui container">
      <div class="row">
        <div class="column left">
          <h2>Player's Selection</h2>
          <p class="slct">Some text..</p>
          <p id="cheathint">Computer will select:</p>
        </div>
        <div class="column middle">
          <h2>Score</h2>
          <h3 class="slct">0-1</h3>
          <p class="result">Computer Wins</p>
        </div>
        <div class="column right">
          <h2>Computer's Selection</h2>
          <p class="slct">Some text..</p>
        </div>
      </div>
    </div>

    <div className="ui text container">
      <div class="btn-selection">
        <button class="selections" id="rock" value="Rock" onClick={this.runGame()}>
          <p id="rocktext">ROCK</p>
        </button>
        <button class="selections" id="paper" value="Paper" onClick={this.runGame()}>
          <p id="papertext">PAPER</p>
        </button>
        <button class="selections" id="scissors" value="Scissors" onClick={this.runGame()}>
          <p id="scissorstext">SCISSORS</p>
        </button>
      </div>
    </div>
    </React.Fragment>

    )
  }
}

export default App

