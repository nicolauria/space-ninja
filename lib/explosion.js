function Explosion(x, y, s, c, speed) {
  this.x = x;
  this.y = y;
  this.s = s; // size
  this.c = c; // color
  this.speed = speed;

  this.xV = random(-1, 2.5)
  this.yV = random(1, 3)
}

Explosion.prototype.update = function() {
  this.x += this.xV;
  this.y += this.yV;
  this.yV += GRAVITY;
  if (this.s > 0) this.s -= .35;
}

Explosion.prototype.draw = function() {
  fill(this.c);
  ellipse(this.x, this.y, this.s);
}
