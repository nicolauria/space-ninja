function Fruit(x, y, s, c, speed) {
  this.x = x;
  this.y = y;

  this.s = s; // size
  this.c = c; // color
  this.speed = speed;

  this.xV = randomXV(x);
  this.yV = random(1, 2);

  this.split = false;
  this.visible = true;
}

Fruit.prototype.update = function() {
  this.x += this.xV;
  this.y += this.yV;

  this.xV *= 0.95;
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
    return random(-3, 0);
  } else {
    return random(3, 0);
  }
}
