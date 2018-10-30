const GRAVITY = -0.1;

let swipes = [];
let sword;
let fruit = [];

function setup() {
  createCanvas(600, 400);
  frameRate(30);

  sword = new Sword(color("#FFF0EE"));

  fruit.push(new Fruit(width / 2, height, 20, "#FF00FF", 3))
}

function draw() {
  background(51);

  if (mouseIsPressed) {
    sword.swipe(mouseX, mouseY);
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
