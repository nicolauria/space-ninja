const GRAVITY = 0.1;

let swipes = [];
let sword;
let fruit = [];

function setup() {
  createCanvas(900, 600);
  frameRate(60);

  sword = new Sword(color("#FFF0EE"));

  fruit.push(new Fruit(random(width), height, 20, "#FF00FF", 3))
}

function draw() {
  background(51);

  if (mouseIsPressed) {
    sword.swipe(mouseX, mouseY);
  }

  if (frameCount % 20 === 0) {
    if (noise(frameCount) > 0.5) {
      fruit.push(randomFruit());
    }
  }

  for (let i = 0; i < fruit.length; i++) {
    fruit[i].update();
    fruit[i].draw();
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
  let col = color(random(255), random(255), random(255));
  let speed = random(3, 5);

  return new Fruit(x, y, size, col, speed);
}
