const GRAVITY = 0.1;


// for randomly selecting from colors
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

let swipes = [];
let sword;
let fruit = [];
let score = [];

function setup() {
  createCanvas(900, 600);
  frameRate(60);

  sword = new Sword(color("#FFF0EE"));

  fruit.push(new Fruit(random(width), height, 20, "#FF00FF", 3))

  score = 0;
}

function draw() {
  background(51);

  if (mouseIsPressed) {
    sword.swing(mouseX, mouseY);
  }

  if (frameCount % 25 === 0) {
    if (noise(frameCount) > 0.5) {
      fruit.push(randomFruit());
    }
  }

  for (let i = 0; i < fruit.length; i++) {
    fruit[i].update();
    fruit[i].draw();
    sword.checkForSlice(fruit[i]);
  }

  if (frameCount % 2 === 0) {
    sword.update();
  }

  sword.draw();
}

function randomFruit() {
  let x = random(width);
  let y = height;
  let size = noise(frameCount) * 50 + 20;

  // let r = noise(frameCount) * 255;
  // let g = noise(frameCount * 2) * 255;
  // let b = noise(frameCount * 3) * 255;
  // let col = color(r, g, b)

  const colors = [
    color(218, 20, 255),
    color(20, 57, 255),
    color(57, 255, 40),
    color(255, 218, 20),
    color(255, 20, 57)
  ]

  let col = colors.randomElement();

  let speed = random(3, 5);

  return new Fruit(x, y, size, col, speed);
}
