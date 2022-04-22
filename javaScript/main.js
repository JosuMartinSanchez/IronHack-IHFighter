// GLOBAL VARIABLES
const canvasDOM= document.querySelector('#my-canvas')
const ctx= canvasDOM.getContext('2d')
const startBtn=document.querySelector('#startGame')

let game;




//STATE MANAGEMENT FUNCTION
const startGame = ()=>{

canvasDOM.style.display='block'

game = new Game ()

game.gameLoop()


}
// move and shoot event
const move=(event)=>{

    if (event.code === 'ArrowRight') {
        game.myAeroplane.moveMyAeroplaneR()
    }else if (event.code === 'ArrowLeft') {
        game.myAeroplane.moveMyAeroplaneL()
    }else if (event.code === 'ArrowUp') {
        game.myAeroplane.moveMyAeroplaneUpp()
    }
}



//ADD EVENT LISTENERS

startBtn.addEventListener('click',startGame)

window.addEventListener('keydown',move)
