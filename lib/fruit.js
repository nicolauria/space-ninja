function Fruit(x, y, s, c, speed) {
  this.x = x;
  this.y = y;

  this.s = s; // size
  this.c = c; // color
  this.speed = speed;

  this.xV = randomXV(x);
  this.yV = random(-6, -9);

  this.split = false;
  this.visible = true;
}

Fruit.prototype.update = function() {
  this.x += this.xV;
  this.y += this.yV;

  this.xV *= 1;
  // add gravity until yV becomes positive (causes shape to move down)
  this.yV += GRAVITY;

  if (this.y > height) {
    this.visible = false;
  }
};

Fruit.prototype.draw = function() {
  noStroke();

  if (this.split) {
    this.c = lerp(this.c, color(51), 0.5)
  }

  fill(this.c);

  ellipse(this.x, this.y, this.s)
};

function randomXV(x) {
  if (x > width / 2) {
    return random(-1, -2.5);
  } else {
    return random(1, 2.5);
  }
}
