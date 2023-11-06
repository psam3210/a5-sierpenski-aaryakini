export default class Sierpenski {
  constructor(canvas) {
    this.canvas = canvas;
    this.length = Math.min(this.canvas.width, this.canvas.height);
    
    this.ctx = this.canvas.getContext('2d');
    this.ctx.translate(this.canvas.width/2, this.canvas.height/2);
    this.ctx.fillStyle = 'black';
  }

  render(iterations) {
  }
}