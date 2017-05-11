function Arrow() {
  this.x = 0;
  this.y = 0;
  this.color = "#ffff00";
  this.rotation = 0;
}

Arrow.prototype.draw = function(ct) {
  ct.save();
  ct.translate(this.x, this.y);
  ct.rotate(this.rotation);
  ct.lineWidth = 2;
  ct.fillStyle = this.color;
  ct.beginPath();
  ct.moveTo(-50, -25);
  ct.lineTo(0, -25);
  ct.lineTo(0, -50);
  ct.lineTo(50, 0);
  ct.lineTo(0, 50);
  ct.lineTo(0, 25);
  ct.lineTo(-50, 25);
  ct.lineTo(-50, -25);
  ct.closePath();
  ct.fill();
  ct.stroke();
  ct.restore();
}
