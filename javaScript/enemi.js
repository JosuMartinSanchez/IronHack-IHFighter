class Enemi {
    constructor() {
      this.x = 300;
      this.y = 0;
      this.w = 90;
      this.h = 90;
      this.img = new Image();
      this.img.src = "../assets/images/enemi1.png"
      this.EnemySpeed = 0.3;
      
    }
    drawEnemi = () => {
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
        
      };
      
      moveEnemi=()=>{

        this.y = this.y + this.EnemySpeed

      }

  }