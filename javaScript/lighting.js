class Lighting {
  constructor(xParam, yParam) {
    this.x = xParam;
    this.y = yParam;
    this.w = 12;
    this.h = 90;
    this.img = new Image();
    this.img.src = "./assets/images/lightning.png";
    this.moveSpeed = 2;
  }
  drawlighting = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  movelighting = () => {
    this.y = this.y - this.moveSpeed;
  };
  drawlsuperighting = () => {
    ctx.drawImage(this.img, this.x + 20, this.y, this.w, this.h);
    ctx.drawImage(this.img, this.x + 50, this.y, this.w, this.h);
    ctx.drawImage(this.img, this.x + 100, this.y, this.w, this.h);
    ctx.drawImage(this.img, this.x - 20, this.y, this.w, this.h);
    ctx.drawImage(this.img, this.x - 50, this.y, this.w, this.h);
    ctx.drawImage(this.img, this.x - 100, this.y, this.w, this.h);
  };
}
