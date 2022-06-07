"use strict";

const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score span");
const sound1 = new Audio("sounds/050-diglett.mp3");
const sound2 = new Audio("sounds/mixkit-retro-arcade-game-over-470.mp3");

let score = 0;

function runGame() {
  const num = Math.ceil(Math.random() * 90);
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;
  
  const moleDiv = document.createElement("div");
  moleDiv.classList.add("mole");
  const moleText = document.createElement("div");
  moleText.setAttribute("id", "moletext");
  moleDiv.append(moleText);
  const img = document.createElement("img");
  moleDiv.append(img);
  moleText.innerText = num;
  
  moleDiv.addEventListener("click", () => {
    moleDiv.style.background = "none";
    img.src = "images/diglett-whacked.png";
    score += 2;
    sound1.play();
    scoreEl.textContent = score;
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(moleDiv);
      runGame();
    }, 500);
  });

  hole.appendChild(moleDiv);

  timer = setTimeout(() => {
    hole.removeChild(moleDiv);
    runGame();
  }, 20000);
}

//Hammer cursor movement
document.querySelector(".board").addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
document.querySelector(".board").addEventListener("mousedown", () => {
  cursor.classList.add("active");
});
document.querySelector(".board").addEventListener("mouseup", () => {
  cursor.classList.remove("active");
});
//Start button click
document.querySelector(".startTimer").addEventListener("click", () => {
  document.querySelector("button").remove();
  countdown();
  runGame();
});

//Game timer
function countdown() {
  const startMin = 1;
  let time = startMin * 60;
  const countdownEl = document.querySelector(".timer");

  let myInterval = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(myInterval);
      sound2.play();
      alert("TIME'S UP!");
      document.querySelector(".board").style.display = "none";
      document.querySelector(".cursor").style.display = "none";
    }
  }
}




