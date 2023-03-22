var computer = document.querySelectorAll(".btns")[0].querySelector("#cmptr");
var multiple = document.querySelectorAll(".btns")[0].querySelector("#multiple");
var playBtn = document.querySelector(".playBtn");
var gameOverDiv = document.querySelector(".gameOver");
var board = document.querySelector(".board");
var btns1 = document.querySelectorAll(".btns")[0];
var playBtnSpn = playBtn.querySelector("span");
var xoDiv = document.querySelector(".xo");
var back1 = document.getElementById("back");
var state = document.querySelector("#state");
var btns2 = document.querySelectorAll(".btns")[1];
var xoDiv2 = document.querySelectorAll(".xo")[1];
var back2 = document.querySelector(".back2");
var player1,player2,station,player,isOver;
var turn = 0;


function start(gm){
  playBtn.style.transform = "scale(0)";
  gameOverDiv.style.transform = "scale(0)";
  setTimeout(function(){
    playBtn.style.display = "none";
    gameOverDiv.style.display = "none";
    board.style.display = "flex";
    board.style.transform = "scale(1)";
  },350);

  player = gm;
  turn = 0;

  if (gm=='x') {
    player1="X"; player2="O";
  }else {
    player1="O"; player2="X";
  }
  isOver=false;
  setBack();
}

function setBack(){
  xoDiv.classList.remove("showXO");
  btns1.style.opacity = "1";
  playBtnSpn.style.opacity = "1";
  btns2.style.opacity = "1";
  state.style.opacity = "1";
  xoDiv2.classList.remove("showXO");

  for (var i = 0; i < board.childElementCount; i++) {
    board.children[i].innerHTML = "";
    board.children[i].classList.remove("checked");
    board.children[i].id="id" + (i+1);
  }
}

function choose(stt){
  station = stt;
  btns1.style.opacity = "0";
  playBtnSpn.style.opacity = "0";
  xoDiv.classList.add("showXO");

  btns2.style.opacity = "0";
  state.style.opacity = "0";
  xoDiv2.classList.add("showXO");
}


back1.onclick = function(){
  station = "";
  xoDiv.classList.remove("showXO");
  btns1.style.opacity = "1";
  playBtnSpn.style.opacity = "1";
}


back2.onclick = function(){
  station = "";
  btns2.style.opacity = "1";
  state.style.opacity = "1";
  xoDiv2.classList.remove("showXO");
}











  function press(number){
    var box = board.children[number-1];

  if (station=='multiple') {
    if (box.classList.contains("checked")==false){
      if (player=='x'){
        box.innerHTML = "<i class='fa-solid fa-x'></i>";
        box.id="x";
        player="o";
      }else {
        box.innerHTML = "<i class='fa-solid fa-o'></i>";
        box.id="o";
        player="x";
      }
      box.classList.add("checked");
    }
    turn++;
    check();
  }
    else {
    var cont=false;

    if (box.classList.contains("checked")==false){
      if (player=='x'){
        box.innerHTML = "<i class='fa-solid fa-x'></i>";
        box.id="x";
        player="o";
      }else {
        box.innerHTML = "<i class='fa-solid fa-o'></i>";
        box.id="o";
        player="x";
      }
      box.classList.add("checked");
      turn++;
      check();
    }

    if (isOver==false) {

      while (cont==false) {
        var rand = Math.floor(Math.random() * 9);

        if (board.children[rand].classList.contains("checked")) {
          cont=false;
        }else {
          cont=true;
          setTimeout(function(){

            board.children[rand].classList.add("checked");
            board.children[rand].innerHTML = "<i class='fa-solid fa-" + player + "'></i>";
            board.children[rand].id = player;
            if (player=='x') {
              player="o";
            }else {
              player="x";
            }
            turn++;
            check();


          },500);
        }
      }

    }

  }

  }




  function check(){
    var controller;

      if (player=='x') {
        controller="O";
      }else {
        controller="X";
      }

    var boxes = board.children;

    if (((boxes[0].id == boxes[1].id) && (boxes[1].id == boxes[2].id)) || ((boxes[0].id == boxes[3].id) && (boxes[3].id == boxes[6].id)) || ((boxes[0].id == boxes[4].id) && (boxes[4].id == boxes[8].id)) || ((boxes[1].id == boxes[4].id) && (boxes[4].id == boxes[7].id)) || ((boxes[2].id == boxes[4].id) && (boxes[4].id == boxes[6].id)) || ((boxes[2].id == boxes[5].id) && (boxes[5].id == boxes[8].id)) || ((boxes[3].id == boxes[4].id) && (boxes[4].id == boxes[5].id)) || ((boxes[6].id == boxes[7].id) && (boxes[7].id == boxes[8].id))) {
      isOver=true;
      gameOver(controller);
    }else if (turn==9) {
      gameOver('draw');
    }
  }





  function gameOver(cnt){
    board.style.transform = "scale(0)";
    setTimeout(function(){
      board.style.display = "none";
      gameOverDiv.style.display = "flex";
      gameOverDiv.style.transform = "scale(1)";
    },350);
    if (cnt!='draw') {
      state.innerText = "Player \"" + cnt + "\" Won!";
    }else {
      state.innerText = "Draw!";
    }
  }





//<i class="fa-solid fa-x"></i>
//<i class="fa-solid fa-o"></i>
