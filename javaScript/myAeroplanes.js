class MyAeroplane {
  constructor() {
    this.x = 300
    this.y = 500;
    this.w = 150;
    this.h = 150;
    this.img = new Image();
    this.img.src = "../assets/images/myaerplane.png";
    this.moveSpeed= 4;
    this.speedX=0;
    this.speedY=0;
    this.gravity= 0.0001;
    this.gravitySpeed=0
  }
  drawMyAeroplane = () => {
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    
  };
  moveMyAeroplaneR= ()=>{
    this.x = this.x + this.moveSpeed
  };
  moveMyAeroplaneL= ()=>{
    this.x = this.x - this.moveSpeed
 };
  moveMyAeroplaneUpp= ()=>{
  this.y = this.y - this.moveSpeed
}
  gravityF=()=>{
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed

  }


}
