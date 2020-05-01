import React from "react";
import { Link } from "react-router-dom";

export default function ViewScores() {
  const storage = window.localStorage;
  const scoreData = JSON.parse(storage.getItem("scoreData"));
  let scoreTable = [];
  scoreData.forEach((data) => {
    scoreTable.push(
      <tr>
        <td data-label="Name">{data.playerName}</td>
        <td data-label="Score">
          {data.playerScore}-{data.computerScore}-{data.tieScore}
        </td>
        <td data-label="Date">{data.date}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="ui main container scoreboard">
        <p id="header">Score Board</p>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>{scoreTable}</tbody>
        </table>
        <Link to="/">
          <div class="ui animated big button" tabindex="0">
            <div class="visible content">Back</div>
            <div class="hidden content">
              <i class="left arrow icon"></i>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
