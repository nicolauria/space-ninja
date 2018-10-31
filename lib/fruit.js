function Fruit(x, y, s, c, speed, b) {
  this.x = x;
  this.y = y;

  this.s = s; // size
  this.c = c; // color
  this.clearC = clearColor(c); // color with no alpha
  this.speed = speed;
  this.b = b; // bad fruit boolean

  this.xV = randomXV(x);
  this.yV = random(-6, -9);

  this.sliced = false;
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

  if (this.sliced) {
    if (this.b) {
      endGame();
    }

    this.c = lerpColor(this.c, color(51), 0.5)
  }

  fill(this.c);

  ellipse(this.x, this.y, this.s);
};

function clearColor(c) {

  let r = red(c);
  let g = green(c);
  let b = blue(c);

  return color(r, g, b, 0);
}

function randomXV(x) {
  if (x > width / 2) {
    return random(-1, -2.5);
  } else {
    return random(1, 2.5);
  }
}

function randomFruit() {
  let x = random(width);
  let y = height;
  let size = noise(frameCount) * 50 + 20;

  const colors = [
    color(218, 20, 255),
    color(20, 57, 255),
    color(57, 255, 40),
    color(255, 218, 20)
  ]

  let col = colors.randomElement();
  let speed = random(3, 5);
  let bad = (random() > 0.85);
  if (bad) col = color(255, 20, 57);

  return new Fruit(x, y, size, col, speed, bad);
}
