// GLOBAL VARIABLES
const canvasDOM = document.querySelector("#my-canvas");
const ctx = canvasDOM.getContext("2d");
const startBtn = document.querySelector("#startBtn");
const startScreen = document.querySelector("#start-container");
const gameOverScreen = document.querySelector("#gameOverScreen");
const restartBtn = document.querySelector("#restartBtn");
const score = document.querySelector("#scoreP");
const scoreContainer = document.querySelector("#score-container");
const shieldDOM = document.querySelector("#shield");
const volumeDom = document.querySelector("#volumeBtn");
const noVolumeDom = document.querySelector("#noVolumeBtn");
const masVolumenDom = document.querySelector("#masVolumeBtn");
const menosVolumenDom = document.querySelector("#menosVolumeBtn");
const playInstuctionDom=document.querySelector("#play-instructions-container")
const supershotDom=document.querySelector("#superShot")
let game;
let counter = 0;
let supershotCounter=0;
let shield = false;
let superShotActivate=false
    
const bgSound = new Audio("./audio/bgSound.mp3");

//STATE MANAGEMENT FUNCTION
const startGame = () => {
  bgSound.preload = "auto";
  bgSound.load()
  bgSound.play();
  bgSound.volume = 0.2;
  counter = 0;
  score.innerText = counter;
  canvasDOM.style.display = "flex";
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";
  scoreContainer.style.display = "block";
  noVolumeDom.style.display = "flex";
  masVolumenDom.style.display = "flex";
  menosVolumenDom.style.display = "flex";
  playInstuctionDom.style.display="block"
  game = new Game();

  game.gameLoop();
};
// move and shoot event
const move = (event) => {
  if (
    event.code === "ArrowRight" &&
    game.myAeroplane.x + game.myAeroplane.w < canvasDOM.width
  ) {
    game.myAeroplane.moveMyAeroplaneR();
  } else if (event.code === "ArrowLeft" && game.myAeroplane.x > 0) {
    game.myAeroplane.moveMyAeroplaneL();
  } else if (event.code === "ArrowUp") {
    game.myAeroplane.moveMyAeroplaneUpp();
  } else if (event.code === "Space") {
    game.shot();
  } else if (event.code === "ArrowDown") {
    game.myAeroplane.moveMyAeroplaneDown();
  } else if (event.code === "KeyE"){
    if(superShotActivate===true){
      game.supershot()
     supershotCounter ++
     if(supershotCounter % 2 ===0)
        superShotActivate = false
    }
    
  } else if (
    event.code === "KeyD" &&
    game.myAeroplane.x + game.myAeroplane.w < canvasDOM.width
  ) {
    game.myAeroplane.moveMyAeroplaneR();
  } else if (event.code === "KeyA" && game.myAeroplane.x > 0) {
    game.myAeroplane.moveMyAeroplaneL();
  } else if (event.code === "KeyW") {
    game.myAeroplane.moveMyAeroplaneUpp();
  }else if (event.code === "KeyS") {
    game.myAeroplane.moveMyAeroplaneDown();
  }
};
// audio control
const volumeOn = () => {
  bgSound.volume = 0.2;
  game.shotSound.volume = 0.2;
  game.splosionSound.volume = 0.2;
  noVolumeDom.style.display = "flex";
  volumeDom.style.display = "none";
};

const volumeOf = () => {
  bgSound.volume = 0.0;
  game.shotSound.volume = 0;
  game.splosionSound.volume = 0;
  volumeDom.style.display = "flex";
  noVolumeDom.style.display = "none";
};
const masVolumen = () => {
  bgSound.volume = bgSound.volume + 0.1;
  game.shotSound.volume = game.shotSound.volume + 0.1;
  game.splosionSound.volume = game.splosionSound.volume + 0.1;
};

const menosVolumen = () => {
  bgSound.volume = bgSound.volume - 0.1;
  game.shotSound.volume = game.shotSound.volume - 0.1;
  game.splosionSound.volume = game.splosionSound.volume - 0.1;
};

//ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
volumeDom.addEventListener("click", volumeOn);
noVolumeDom.addEventListener("click", volumeOf);
masVolumenDom.addEventListener("click", masVolumen);
menosVolumenDom.addEventListener("click", menosVolumen);

window.addEventListener("keydown", move);
