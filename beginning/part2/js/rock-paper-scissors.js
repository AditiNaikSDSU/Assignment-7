/* eslint-env browser */
// Rock, Paper, Scissors

(function main() {
  const VALID = ["rock", "paper", "scissors"];
  const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
  const userRaw = typeof prompt === "function" ? prompt("Choose rock, paper, or scissors:") : null;

  if (userRaw === null) {
    if (typeof alert === "function") alert("Game canceled.");
    return;
  }

  const user = userRaw.trim().toLowerCase();
  if (!VALID.includes(user)) {
    if (typeof alert === "function") alert('Invalid choice. Please enter "rock", "paper", or "scissors".');
    return;
  }

  const comp = VALID[Math.floor(Math.random() * 3)];

  if (user === comp) {
    alert(`Tie! You both chose ${user}.`);
  } else if (beats[user] === comp) {
    alert(`You win! ${user} beats ${comp}.`);
  } else {
    alert(`Computer wins! ${comp} beats ${user}.`);
  }
})();
