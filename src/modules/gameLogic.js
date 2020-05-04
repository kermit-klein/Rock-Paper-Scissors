const decideWinner = (player, computer) => {
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

export { decideWinner };
