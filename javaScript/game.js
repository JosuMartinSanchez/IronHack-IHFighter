class Game {
    constructor(){
        
        this.bg = new Image ();
        this.bg.src='./assets/images/canvasbg.jpg';
        this.myAeroplane= new MyAeroplane ();
        this.enemiArr= [new Enemi ()]
       // this.enemi= new Enemi ()
    }

    addNewEnemi=()=>{
       let newEnemi = new Enemi ()
        if (newEnemi)



    }











    gameLoop=() =>{
        //1.borrar el cambas
        ctx.clearRect(0,0,canvasDOM.width,canvasDOM.height)


        //2.acciones y movimientos
        //this.myAeroplane.gravityF()
       
         this.enemiArr.forEach ((eachEnemi)=>{
            eachEnemi.moveEnemi()
        });
        //this.enemi.moveEnemi()
        this.addNewEnemi()
        //3.dibujar elementos
        ctx.drawImage(this.bg,0,0,canvasDOM.width,canvasDOM.height);
        this.myAeroplane.drawMyAeroplane();
       this.enemiArr.forEach((eachEnemi)=>{
            eachEnemi.drawEnemi()
        })
        
        


        //4.control y recursividad

        requestAnimationFrame(this.gameLoop)
    }
}
