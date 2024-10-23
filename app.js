let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["btn1", "btn2", "btn3", "btn4"];

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is stared");
    started = true;

    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randCol = btns[randIdx];
  let randBtn = document.querySelector(`.${randCol}`);
  //   console.log(randIdx);
  //   console.log(randCol);
  //   console.log(randBtn);
  btnflash(randBtn);
  gameSeq.push(randCol);
  console.log(gameSeq);
}

function check(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelup, 100);
    }
  } else {
    h2.innerHTML = `Game Over! your score was <b>${level}</b><br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}
function buttonPress() {
  // console.log("button clicked");
  //   console.log(this);
  let btn = this;
  btnflash(btn);

  userButton = btn.getAttribute("id");
  userSeq.push(userButton);
  //   console.log(userButton);
  //   console.log(userSeq);
  check(userSeq.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
  btn.addEventListener("click", buttonPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
