class MyAeroplane {
  constructor() {
    this.x = 300
    this.y = 500;
    this.w = 150;
    this.h = 150;
    this.img = new Image();
    this.img.src = "./assets/images/myaerplane.png";
    this.moveSpeed= 20;
    this.gravitySpeed= 0.2
    this.img2=new Image ()
    this.img2.src='./assets/images/aeroplaneShield.png'
  }
  drawMyAeroplane = () => {
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h)
    
  };
  drawMyAeroplaneShield = () => {
    ctx.drawImage(this.img2,this.x,this.y,this.w,this.h)
    
  };
  moveMyAeroplaneR= ()=>{
    this.x = this.x + this.moveSpeed
  };
  moveMyAeroplaneL= ()=>{
    this.x = this.x - this.moveSpeed
 };
  moveMyAeroplaneUpp= ()=>{
  this.y = this.y - this.moveSpeed
};
moveMyAeroplaneDown= ()=>{
  this.y = this.y + this.moveSpeed
};

  gravityF=()=>{
    
    this.y = this.y + this.gravitySpeed
  };


}
