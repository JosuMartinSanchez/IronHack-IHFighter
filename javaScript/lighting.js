class Lighting {
    constructor(xParam,yParam) {
      this.x = xParam
      this.y = yParam;
      this.w = 30 ;
      this.h = 80 ;
      this.img = new Image();
      this.img.src = "../assets/images/lightning.png";
      this.moveSpeed= 1;
  
    }
    drawlighting = () => {
      ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
      
    };
    movelighting= ()=>{
      this.y = this.y - this.moveSpeed
    };
}