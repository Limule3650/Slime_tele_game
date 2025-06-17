
let score = 0;
let timeLeft = 30;
let interval;
const slime = document.getElementById("slime");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("timer");
const gameOverScreen = document.getElementById("game-over");
const finalScore = document.getElementById("final-score");

function moveSlime() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  slime.style.left = x + "px";
  slime.style.top = y + "px";
}

function updateScore() {
  score++;
  scoreText.innerText = "Score: " + score;
  moveSlime();
}

function updateTimer() {
  timeLeft--;
  timerText.innerText = "Time: " + timeLeft + "s";
  if (timeLeft <= 0) {
    clearInterval(interval);
    slime.style.display = "none";
    gameOverScreen.style.display = "block";
    finalScore.innerText = "Your score: " + score;
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  slime.style.display = "block";
  gameOverScreen.style.display = "none";
  scoreText.innerText = "Score: 0";
  timerText.innerText = "Time: 30s";
  moveSlime();
  interval = setInterval(updateTimer, 1000);
}

slime.addEventListener("click", updateScore);
window.onload = startGame;
