class Game {
    constructor(){
        
        this.bg = new Image ();
        this.bg.src='./assets/images/canvasbg.jpg';
        this.myAeroplane= new MyAeroplane ();
        this.enemiArr= [new Enemi ()];
        this.lightingArr = [];
        this.isGameOn =true;
       
    }

    addNewEnemi=()=>{
       let newEnemi = new Enemi ()
      let randonEnemi = Math.random() * (canvasDOM.width-this.myAeroplane.w)
        if (this.enemiArr[this.enemiArr.length -1].y > 150){
            
        let newRandomEnemi= new Enemi(randonEnemi)
        this.enemiArr.push(newRandomEnemi)

        };



    };
    shoot=()=>{
        let lightingShoot= new Lighting (this.myAeroplane.x + this.myAeroplane.w/2,this.myAeroplane.y)
        this.drawlighting()
        this.movelighting
        this.lightingArr.push(lightingShoot)   

    };
    gameOverColision1=()=>{

        this.enemiArr.forEach((eachEnemi)=>{
            
            if (this.myAeroplane.x < eachEnemi.x + eachEnemi.w &&
                this.myAeroplane.x + this.myAeroplane.w > eachEnemi.x &&
                this.myAeroplane.y < eachEnemi.y + eachEnemi.h &&
                this.myAeroplane.h + this.myAeroplane.y > eachEnemi.y){
                    this.isGameOn=false;
                    canvasDOM.style.display='none';
                    gameOverScreen.style.display='block'


                }
    

        })
    }
        

        
        
        
       
             
        
    
    







        

    gameLoop=() =>{
        //1.borrar el cambas
        ctx.clearRect(0,0,canvasDOM.width,canvasDOM.height)


        //2.acciones y movimientos
          this.myAeroplane.gravityF()
       
         this.enemiArr.forEach ((eachEnemi)=>{
            eachEnemi.moveEnemi()
        });
        this.gameOverColision1()
        //this.enemi.moveEnemi()
        this.addNewEnemi() 
        //3.dibujar elementos
        ctx.drawImage(this.bg,0,0,canvasDOM.width,canvasDOM.height);
        this.myAeroplane.drawMyAeroplane();
        this.enemiArr.forEach((eachEnemi)=>{
            eachEnemi.drawEnemi()
        });

        this.lightingArr.forEach((eachLight)=>{
            

            eachLight.drawLcd
            eachLight.movelighting()

        });
         //4.control y recursividad
        if (this.isGameOn===true) {
            requestAnimationFrame(this.gameLoop);
        }
          
    }
}
