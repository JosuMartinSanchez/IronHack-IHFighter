class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "./assets/images/canvasbg.jpg";
    this.myAeroplane = new MyAeroplane();
    this.enemiArr = [
      new Enemi(0, "./assets/images/enemi1.png", 0.2),
      new Enemi(500, "./assets/images/enemi3.png", 0.2),
    ];
    this.lightingArr = [];
    this.isGameOn = true;

    this.shotSound = new Audio("./audio/shootSound.mp3");
    this.splosionSound = new Audio("./audio/explosionSound.mp3");
    
  }

  addNewEnemi = () => {
    let randonEnemi = Math.random() * (canvasDOM.width - this.myAeroplane.w);
    let randomEnemi2 = Math.random() * (canvasDOM.width - this.myAeroplane.w);
    let speedIncrease = 0.2;
    if (counter >= 10) {
      speedIncrease = 0.8;
      
    } else if (counter >= 5) {
      
      speedIncrease = 0.5;
    }else if(counter >= 2){
      speedIncrease=0.2
    }
    while (randomEnemi2 < randonEnemi + 90 && randomEnemi2 > randonEnemi) {
      randomEnemi2 = Math.random() * (canvasDOM.width - this.myAeroplane.w);
    }

    if (this.enemiArr.length !== 0) {
      if (this.enemiArr[this.enemiArr.length - 1].y > 150) {
        let newRandomEnemi = new Enemi(
          randonEnemi,
          "./assets/images/enemi1.png",
          speedIncrease
        );
        this.enemiArr.push(newRandomEnemi);
        let newRandomEnemi2 = new Enemi(
          randomEnemi2,
          "./assets/images/enemi3.png",
          speedIncrease
        );
        this.enemiArr.push(newRandomEnemi2);
      }
    } else {
      let newRandomEnemi = new Enemi(
        randonEnemi,
        "./assets/images/enemi1.png",
        speedIncrease
      );
      this.enemiArr.push(newRandomEnemi);
      let newRandomEnemi2 = new Enemi(
        randomEnemi2,
        "./assets/images/enemi3.png",
        speedIncrease
      );
      this.enemiArr.push(newRandomEnemi2);
    }
  };
  shot = () => {
    let centerShot = new Lighting(
      this.myAeroplane.x + 59,
      this.myAeroplane.y - 58
    );
    this.lightingArr.push(centerShot);
    this.splosionSound.pause();
    this.splosionSound.currentTime = 0;
    this.shotSound.preload='auto'
        this.shotSound.play()
  };
  supershot = () => {
    let centerShot = new Lighting(
      this.myAeroplane.x + 59,
      this.myAeroplane.y - 58
    );
    this.lightingArr.push(centerShot);
    let oneShot = new Lighting(this.myAeroplane.x + 159,
      this.myAeroplane.y - 58)
    this.lightingArr.push(oneShot);
    let secondShot = new Lighting(this.myAeroplane.x + 259,
      this.myAeroplane.y - 58)
    this.lightingArr.push(secondShot);
    let thirdShot = new Lighting(this.myAeroplane.x + 359,
      this.myAeroplane.y - 58)
    this.lightingArr.push(thirdShot);
    let fourtShot = new Lighting(this.myAeroplane.x - 50,
      this.myAeroplane.y - 58)
    this.lightingArr.push(fourtShot);
    let fiveShot = new Lighting(this.myAeroplane.x - 159,
      this.myAeroplane.y - 58)
    this.lightingArr.push(fiveShot);
    let sixShot = new Lighting(this.myAeroplane.x - 259,
      this.myAeroplane.y - 58)
    this.lightingArr.push(sixShot);


    this.splosionSound.pause();
    this.splosionSound.currentTime = 0;
    this.shotSound.preload='auto'
    this.shotSound.play()
  }
  gameOverColisions = () => {
    if (this.myAeroplane.y + this.myAeroplane.h > canvasDOM.height) {
      shield = false;
      if (shield === false) {
        canvasDOM.style.display = "none";
        this.isGameOn = false;
        gameOverScreen.style.display = "block";
        volumeDom.style.display='none'
        noVolumeDom.style.display='none'
        shieldDOM.style.display='none'
        masVolumenDom.style.display='none'
        menosVolumenDom.style.display='none'
        
      } else {
        shield = false; 
      }
      
    }
    this.enemiArr.forEach((eachEnemi, ie) => {
      if (
        this.myAeroplane.x < eachEnemi.x + eachEnemi.w &&
        this.myAeroplane.x + this.myAeroplane.w > eachEnemi.x &&
        this.myAeroplane.y < eachEnemi.y + eachEnemi.h &&
        this.myAeroplane.h + this.myAeroplane.y > eachEnemi.y
      ) {
        if (shield === false) {
          canvasDOM.style.display = "none";
          this.isGameOn = false;
          gameOverScreen.style.display = "block";
          volumeDom.style.display='none'
          noVolumeDom.style.display='none'
          shieldDOM.style.display='none'
          masVolumenDom.style.display='none'
          menosVolumenDom.style.display='none'
        } else {
          shield = false;
          this.enemiArr.splice(ie, 1);
          counter++;
          score.innerText = counter;
        }
      }
    });
  };
  shotColision = () => {
    this.enemiArr.forEach((eachEnemi, ie) => {
      this.lightingArr.forEach((eachLight, il) => {
        if (
          eachLight.x < eachEnemi.x + eachEnemi.w &&
          eachLight.x + eachLight.w > eachEnemi.x &&
          eachLight.y < eachEnemi.y + eachEnemi.h &&
          eachLight.h + eachLight.y > eachEnemi.y
        ) {
          this.enemiArr.splice(ie, 1);
          this.lightingArr.splice(il, 1);
          counter++;
          score.innerText = counter;
          this.splosionSound.pause();
          this.splosionSound.currentTime = 0;
          this.splosionSound.preload = "auto";
          this.splosionSound.play();
          
        }
      });
    });
  };
  shieldActivate = () => {
    if (
      counter === 2 ||
      counter === 100 ||
      counter === 150 ||
      counter === 200
    ) {
      shield = true;
    }

    if (shield === true) {
      shieldDOM.style.display = "block";
    } else if (shield === false) {
      shieldDOM.style.display = "none";
    }
  };
  supershotActivate =()=>{
    if (
      counter === 2 ||
      counter === 100 ||
      counter === 150 ||
      counter === 200
    ) {
      superShotActivate = true;
    }

  };

  gameLoop = () => {
    //1.borrar el cambas
    ctx.clearRect(0, 0, canvasDOM.width, canvasDOM.height);

    //2.acciones y movimientos
    this.myAeroplane.gravityF();

    this.enemiArr.forEach((eachEnemi) => {
      eachEnemi.moveEnemi();
      if (score > 2 && score < 5) {
        eachEnemi.EnemySpeed = 5;
      }
    });
    this.lightingArr.forEach((eachLight) => {
      eachLight.movelighting();
    });
    this.shieldActivate();
    this.supershotActivate()
    this.gameOverColisions();
    this.shotColision();
    this.addNewEnemi();
    console.log(superShotActivate);
    

    //3.dibujar elementos
    ctx.drawImage(this.bg, 0, 0, canvasDOM.width, canvasDOM.height);
    if (shield === false) {
      this.myAeroplane.drawMyAeroplane();
    } else {
      this.myAeroplane.drawMyAeroplaneShield();
    }
    
    this.lightingArr.forEach((eachLight) => {
      eachLight.drawlighting();
    });
   

    this.enemiArr.forEach((eachEnemi) => {
      eachEnemi.drawEnemi();
    });
    
    //4.control y recursividad
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    } else {
      bgSound.pause();
    }
  };
}
