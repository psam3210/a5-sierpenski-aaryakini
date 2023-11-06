export default class Sierpenski {
  constructor(canvas) {
    this.canvas = canvas;
    this.length = Math.min(this.canvas.width, this.canvas.height);
    
    this.ctx = this.canvas.getContext('2d');
    this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
    const gradient = this.ctx.createLinearGradient(-this.canvas.width/6, 0, this.canvas.width/6, 0);
    gradient.addColorStop(0, "orange");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "hotpink");
    this.ctx.fillStyle = gradient;
  }

  render(iterations) {
    console.log(iterations);
    this.ctx.clearRect((-1 * this.canvas.width / 2), (-1 * this.canvas.height / 2), this.canvas.width, this.canvas.height);

    let a = {x:(-1 * this.length/2), y:(this.length * (Math.sqrt(3)/4))}; //setting coordinates of a, the starting point
    this.draw(a, this.length, iterations);
  }

  draw(point,length,iterations){
    if (iterations == 0){

      let a = point;
      let b = {x:(point.x + length / 2), y:(point.y - length * Math.sqrt(3) / 2)};
      let c = {x:(point.x + length), y:point.y}
      
      this.ctx.beginPath();
      this.ctx.moveTo(a.x, a.y);
      this.ctx.lineTo(b.x, b.y);
      this.ctx.lineTo(c.x, c.y);
      this.ctx.lineTo(a.x, a.y);
      this.ctx.fill();
      this.ctx.closePath();

    } else{
      let pointTop = {x:(point.x + (length / 4)), y:(point.y - (length * (Math.sqrt(3) / 4)))};
      let pointBotRight = {x:(point.x + (length / 2)) , y:point.y};

      this.draw(point, length/2, iterations - 1);
      this.draw(pointBotRight, length/2, iterations - 1);
      this.draw(pointTop, length/2, iterations - 1);
    }

  }
}