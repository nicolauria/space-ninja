const GRAVITY = 0.1;


// for randomly selecting from colors
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

let swipes = [];
let sword;
let fruit = [];
let score;

function setup() {
  createCanvas(900, 600);
  frameRate(60);

  sword = new Sword(color("#FFF0EE"));
  score = 0;
  textAlign(CENTER);
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

  let points = 0;
  let combo = 0;
  for (let i = 0; i < fruit.length; i++) {
    fruit[i].update();
    fruit[i].draw();
    points += (sword.checkForSlice(fruit[i])) ? 1 : 0;
    combo += (sword.checkForSlice(fruit[i]) && points > 1) ? 2 : 0;
  }

  if (frameCount % 2 === 0) {
    sword.update();
  }

  // may need to remove args
  sword.draw(points, combo);
  score += points + combo;

  drawScore();
}

function drawScore() {
  noStroke();
  fill(255);
  textSize(50);
  text(score, 50, 75);
}

function engGame() {
  noLoop();
  console.log('You Lose');
}
