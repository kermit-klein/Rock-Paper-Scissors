const computerRandom = () => {
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

export { computerRandom };
