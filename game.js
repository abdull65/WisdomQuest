const selectedCharArr = [];
const wordAarr = ["javascript", "python", "abdullahi", "style", "text"];
const itMatch = false;
const fillPuzzle = function () {
  for (let dataBox of document.querySelectorAll("td")) {
    dataBox.addEventListener("click", () => {
      if (dataBox.className === "") {
        dataBox.className = "selected";
      } else {
        dataBox.className = "";
      }
    });
    if (dataBox.textContent != "") continue;
    let charCode = Math.round(65 + Math.random() * 25);
    dataBox.textContent = String.fromCharCode(charCode);
  }
};
fillPuzzle();
const checkWord = function () {
  for (let i = 0; i < wordAarr.length; i++) {
    for (let j = 0; (j = selectedCharArr.length); j++) {
      if (selectedCharArr[i] === wordAarr[i]) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }
};
checkWord();

///////////////////////SNAKE GAME///////////////////////////
// Selecting the game box element from the DOM
const snakeBoxEl = document.querySelector(".gameBox");
// Selecting elements for displaying current score and high score
const currrentScoreEl = document.querySelector(".currentScore");
const highScoreEl = document.querySelector(".highScore");

// Initializing variables for snake position, velocity, score, game state, and timer ID
let foodX, foodY;
let snakeHeadX = 1,
  snakeHeadY = 1;
let velocityX = 0,
  velocityY = 0;
let snakeBody = [];
let score = 0;
let isGameOver = false;
let setIndervalId; // Variable to store the interval ID for the game loop
let highScore = localStorage.getItem("highScore") || 0; // Retrieving high score from local storage, defaulting to 0 if not present
highScoreEl.innerHTML = `High Score: ${highScore}`;

// Function to change the position of the food element on the grid
const changeFoodPosition = function () {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

// Function to handle game over event by displaying an alert, clearing the game loop interval, and reloading the page
const handleGameOver = function () {
  alert("Game Over!, press ok to replay!");
  clearInterval(setIndervalId);
  location.reload();
};

// Functions to handle snake movement in different directions
function upDirection() {
  velocityX = 0;
  velocityY = -1;
}
function downDirection() {
  velocityX = 0;
  velocityY = 1;
}
function leftDirection() {
  velocityX = -1;
  velocityY = 0;
}
function rightDirection() {
  velocityX = 1;
  velocityY = 0;
}

// Function to change snake direction based on key events
const changeDirection = function (e) {
  if (e.key === "ArrowUp") {
    upDirection();
  } else if (e.key === "ArrowDown") {
    downDirection();
  } else if (e.key === "ArrowLeft") {
    leftDirection();
  } else if (e.key === "ArrowRight") {
    rightDirection();
  }
};

// Function to initialize the game, update snake position, handle collisions, and update score
const initGame = function () {
  if (isGameOver) {
    handleGameOver();
    return;
  }
  let snakeFoodEL = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

  // Check if the snake eats the food
  if (snakeHeadX === foodX && snakeHeadY === foodY) {
    changeFoodPosition();
    snakeBody.push([snakeHeadX, snakeHeadY]);
    score++;
    highScore = score >= highScore ? score : highScore;
    localStorage.setItem("highScore", highScore);
    currrentScoreEl.innerHTML = `Score: ${score}`;
    highScoreEl.innerHTML = `High Score: ${highScore}`;
  }

  // Update snake body positions
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }
  snakeBody[0] = [snakeHeadX, snakeHeadY];
  snakeHeadX += velocityX;
  snakeHeadY += velocityY;

  // Check for collisions with walls or itself
  if (
    snakeHeadX <= 0 ||
    snakeHeadX > 30 ||
    snakeHeadY <= 0 ||
    snakeHeadY > 30
  ) {
    isGameOver = true;
  }

  // Generate snake and food elements on the grid
  for (let i = 0; i < snakeBody.length; i++) {
    snakeFoodEL += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    if (
      i !== 0 &&
      snakeBody[0][1] === snakeBody[i][1] &&
      snakeBody[0][0] === snakeBody[i][0]
    ) {
      isGameOver = true;
    }
  }
  snakeBoxEl.innerHTML = snakeFoodEL;
};

// Change initial food position and start the game loop
changeFoodPosition();
setIndervalId = setInterval(initGame, 125);

// Event listeners for arrow key and button clicks to change snake direction
document.addEventListener("keyup", changeDirection);
const topBtn = document.getElementById("top");
const rightBtn = document.getElementById("right");
const downBtn = document.getElementById("down");
const leftBtn = document.getElementById("left");
topBtn.addEventListener("click", () => {
  upDirection();
});
rightBtn.addEventListener("click", () => {
  rightDirection();
});
downBtn.addEventListener("click", () => {
  downDirection();
});
leftBtn.addEventListener("click", () => {
  leftDirection();
});
