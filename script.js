"use strict";

const cursor = document.querySelector(".cursor");
const holes = [...document.querySelectorAll(".hole")];
const scoreEl = document.querySelector(".score span");
let score = 0;
const sound = new Audio("sounds/050-diglett.mp3");
const img = document.createElement("img");

//Game run
function runGame() {
  const i = Math.floor(Math.random() * holes.length);
  const hole = holes[i];
  let timer = null;

  img.classList.add("mole");
  img.src = "images/diglett.png";
  hole.appendChild(img);

  timer = setTimeout(() => {
    hole.removeChild(img);
    runGame();
  }, 1500);

  img.addEventListener("click", () => {
    score += 2;
    sound.play();
    scoreEl.textContent = score;
    img.src = "images/diglett-whacked.png";
    clearTimeout(timer);
    setTimeout(() => {
      hole.removeChild(img);
      runGame();
    }, 500);
  });
}


//Hammer movement
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
        alert("GAME OVER!");
        img.removeEventListener('click');
     }
  }
}

//Start button click
document.querySelector('.startTimer').addEventListener("click", () => {
    countdown();
    runGame();
  
  });

  




