class Enemi {
    constructor(xParam,srcParam) {
      this.x = xParam;
      this.y = 0;
      this.w = 90;
      this.h = 90;
      this.img = new Image();
      this.img.src = srcParam
      this.EnemySpeed = 0.3;
      
      
    }
    drawEnemi = () => {
        ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
        
      };
      
      moveEnemi=()=>{

        this.y = this.y + this.EnemySpeed

      };


  }