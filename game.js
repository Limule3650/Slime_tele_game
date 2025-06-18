let circle = document.getElementById("beat-circle");
let zone = document.getElementById("target-zone");
let scoreDisplay = document.getElementById("score");
let music = document.getElementById("music");

let score = 0;
let speed = 2;
let posY = -100;
let isPlaying = false;

let sounds = ["love.mp3", "beat.mp3", "heart.mp3"];
let currentSound = new Audio();

function chooseRandomSound() {
  let file = sounds[Math.floor(Math.random() * sounds.length)];
  currentSound = new Audio(file);
}

function resetCircle() {
  posY = -100;
  chooseRandomSound();
  circle.style.top = posY + "px";
}

function animate() {
  if (!isPlaying) return;
  posY += speed;
  circle.style.top = posY + "px";
  if (posY > 500) resetCircle();
  requestAnimationFrame(animate);
}

circle.addEventListener("click", () => {
  let circlePos = circle.getBoundingClientRect();
  let zonePos = zone.getBoundingClientRect();
  let overlap = Math.abs(circlePos.top - zonePos.top);

  currentSound.play();

  if (overlap < 30) {
    score += 10;
  } else if (overlap < 60) {
    score += 5;
  } else {
    score -= 5;
  }
  scoreDisplay.textContent = "Score: " + score;
  resetCircle();
});

window.onload = () => {
  isPlaying = true;
  music.play();
  chooseRandomSound();
  animate();
};