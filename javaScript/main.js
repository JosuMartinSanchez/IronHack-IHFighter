// GLOBAL VARIABLES
const canvasDOM= document.querySelector('#my-canvas')
const ctx= canvasDOM.getContext('2d')
const startBtn=document.querySelector('#startBtn')
const startScreen=document.querySelector('#start-container')
const gameOverScreen=document.querySelector('#gameOverScreen')
const restartBtn=document.querySelector('#restartBtn')
const score=document.querySelector('#scoreP')
const scoreContainer=document.querySelector('#score-container')
const shieldDOM=document.querySelector('#shield')
let game;
let counter=0;
let shield = false;
const bgSound= new Audio('../audio/bgSound.mp3')







//STATE MANAGEMENT FUNCTION
const startGame = ()=>{
bgSound.preload='auto'
bgSound.play()
 shield=false   
counter=0
score.innerText=counter
canvasDOM.style.display='flex'
startScreen.style.display='none'
gameOverScreen.style.display='none'
scoreContainer.style.display='block'


game = new Game ()

game.gameLoop()


}
// move and shoot event
const move=(event)=>{

    if (event.code === 'ArrowRight' && game.myAeroplane.x+game.myAeroplane.w < canvasDOM.width) {
        game.myAeroplane.moveMyAeroplaneR()
    }else if (event.code === 'ArrowLeft' && game.myAeroplane.x >0) {
        game.myAeroplane.moveMyAeroplaneL()
    }else if (event.code === 'ArrowUp') {
        game.myAeroplane.moveMyAeroplaneUpp()
    }else if (event.code === 'Space'){
    
            game.shot()
        game.shotSound.preload='auto'
        game.shotSound.play()
    }else if(event.code==='ArrowDown'){
        game.myAeroplane.moveMyAeroplaneDown()
    }
}



//ADD EVENT LISTENERS

startBtn.addEventListener('click',startGame)
restartBtn.addEventListener('click',startGame)


window.addEventListener('keydown',move)
