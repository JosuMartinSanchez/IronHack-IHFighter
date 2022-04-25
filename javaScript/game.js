class Game {
    constructor(){
        
        this.bg = new Image ();
        this.bg.src='./assets/images/canvasbg.jpg';
        this.myAeroplane= new MyAeroplane ();
        this.enemiArr= [new Enemi (0,'../assets/images/enemi1.png'),new Enemi(0,'../assets/images/enemi2.png')];
        this.lightingArr = [];
        this.isGameOn =true;
        
    }

    addNewEnemi=()=>{
       
      let randonEnemi = Math.random() * (canvasDOM.width-this.myAeroplane.w) 
      let randomEnemi2 = Math.random() * (canvasDOM.width-this.myAeroplane.w) 
        if (this.enemiArr[this.enemiArr.length -1].y > 150){
            
        let newRandomEnemi= new Enemi(randonEnemi,"../assets/images/enemi1.png")
        this.enemiArr.push(newRandomEnemi)
        let newRandomEnemi2= new Enemi (randomEnemi2,"../assets/images/enemi2.png")
        this.enemiArr.push(newRandomEnemi2)
        }
        
    };
    shot=()=>{
        let centerShot=new Lighting (this.myAeroplane.x +59,this.myAeroplane.y -58)
        this.lightingArr.push(centerShot)
    }
  
    gameOverColisions=()=>{
        if(this.myAeroplane.y+this.myAeroplane.h>canvasDOM.height){

            this.isGameOn=false;
            canvasDOM.style.display='none';
            gameOverScreen.style.display='block'

        }
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
    };
    shotColision=()=>{

        this.enemiArr.forEach((eachEnemi,ie)=>{
            this.lightingArr.forEach((eachLight,il)=>{

                if (eachLight.x < eachEnemi.x + eachEnemi.w &&
                    eachLight.x + eachLight.w > eachEnemi.x &&
                    eachLight.y < eachEnemi.y + eachEnemi.h &&
                    eachLight.h + eachLight.y > eachEnemi.y){
                        
                        this.enemiArr.splice(ie,1)
                        this.lightingArr.splice(ie,1)
                        let contador1 = contador1 +1
                        
                    }
            })
        })
    };

  
        
        
        
       
             
        
    
    







        

    gameLoop=() =>{
        //1.borrar el cambas
        ctx.clearRect(0,0,canvasDOM.width,canvasDOM.height)


        //2.acciones y movimientos
          this.myAeroplane.gravityF()
          
          this.enemiArr.forEach ((eachEnemi)=>{
            eachEnemi.moveEnemi()
        });
        this.lightingArr.forEach((eachLight)=>{
            
            eachLight.movelighting()
            
        });
        this.gameOverColisions()
        this.shotColision()
        
        this.addNewEnemi() 
        //3.dibujar elementos
        ctx.drawImage(this.bg,0,0,canvasDOM.width,canvasDOM.height);
        this.myAeroplane.drawMyAeroplane();
        
        this.lightingArr.forEach((eachLight)=>{
            
            eachLight.drawlighting()
            
        });
        this.enemiArr.forEach((eachEnemi)=>{
            
            eachEnemi.drawEnemi()
            
        });
         //4.control y recursividad
        if (this.isGameOn===true) {
            requestAnimationFrame(this.gameLoop);
        }
          
    }
}
