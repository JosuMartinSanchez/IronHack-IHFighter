class Game {
    constructor(){
        
        this.bg = new Image ();
        this.bg.src='./assets/images/canvasbg.jpg';
        this.myAeroplane= new MyAeroplane ();
        this.enemiArr= [new Enemi (0,'../assets/images/enemi1.png'),new Enemi(0,'../assets/images/enemi2.png')];
        this.lightingArr = [];
        this.isGameOn =true;
         
        this.shotSound= new Audio('../audio/shootSound.mp3')
        this.splosionSound = new Audio('../audio/explosionSound.mp3')
        this.removeShield=false
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
            
            shield=false
            if(shield===false){
                canvasDOM.style.display='none';
                this.isGameOn=false;
                gameOverScreen.style.display='block'
            }else{
                shield=false
            }
          

        }
        this.enemiArr.forEach((eachEnemi)=>{
            
            if (this.myAeroplane.x < eachEnemi.x + eachEnemi.w &&
                this.myAeroplane.x + this.myAeroplane.w > eachEnemi.x &&
                this.myAeroplane.y < eachEnemi.y + eachEnemi.h &&
                this.myAeroplane.h + this.myAeroplane.y > eachEnemi.y){
                    if(shield===false){
                        canvasDOM.style.display='none';
                        this.isGameOn=false;
                        gameOverScreen.style.display='block'
                    }else{
                        shield=false
                        this.enemiArr.forEach((eachEnemi,ie)=>{
                            this.enemiArr.splice(ie,1)
                        })
                    }

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
                        this.lightingArr.splice(il,1)
                        counter ++
                        score.innerText=counter; 
                        this.splosionSound.pause();
                        this.splosionSound.currentTime = 0;
                        this.splosionSound.preload='auto'
                        this.splosionSound.play()
                    }
            })
        })
    };
    shieldActivate=()=>{

        if(counter===2 || counter=== 100 || counter===150 || counter=== 200 ){
            shield =true
        }
    };
    /*dificulty=()=>{

        if (counter===2) {
            this.enemiArr.forEach((eachEnemi)=>{
                eachEnemi.EnemySpeed= eachEnemi.EnemySpeed + 0.02
                
            })
        }

    }*/

    
        
        
       
             
        
    
    







        

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
        this.shieldActivate()
        //this.dificulty()
                        //3.dibujar elementos
        ctx.drawImage(this.bg,0,0,canvasDOM.width,canvasDOM.height);
        if(shield===false){
            
            this.myAeroplane.drawMyAeroplane()
        }else{
            this.myAeroplane.drawMyAeroplaneShield()
            
        }
        
        this.lightingArr.forEach((eachLight)=>{
            
            eachLight.drawlighting()
            
        });
        this.enemiArr.forEach((eachEnemi)=>{
            
            eachEnemi.drawEnemi()
            
        });
         //4.control y recursividad
        if (this.isGameOn===true) {
            requestAnimationFrame(this.gameLoop);
        }else{
            bgSound.pause()
        }
          
    }
}
