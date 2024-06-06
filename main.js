let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgame = document.querySelector(".new-game");
let msg = document.querySelector(".msg");
let msgcontenar = document.querySelector(".msg-contenar");

let truno = true;

const winpatten = [
  
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  
  ];
  
  let resetgame = () => {
    truno = true;
    msgcontenar.classList.add("hide");
    enbledboxes();
  };

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (truno) {
      box.innerText = "o";
      truno = false;
    }

    else {
      box.innerText = "x";
      truno = true;
    };
    box.disabled = true;

    checkwiner();
  });
});

let disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
}
let enbledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText ='';
    // Tab to edit
  }
}
let finishwinner = 'winner is ';

const showwinner = (winner) => {
  msg.innerText = finishwinner +  winner;
  msgcontenar.classList.remove("hide");
  disabledboxes(); 
};

const checkwiner = () => {
  for (let pattern of winpatten) {
 
let pos1 = boxes[pattern[0]].innerText;
 let pos2 = boxes[pattern[1]].innerText;
let pos3 = boxes[pattern[2]].innerText;
     
    if (pos1 != "" && pos2 != "" && pos3 != "" ) {
      
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winer",pos1);
        
        
        showwinner(pos1);
        
      }
      
    }

 }
};
  
  resetbtn.addEventListener("click",resetgame);
 newgame.addEventListener("click",resetgame);
