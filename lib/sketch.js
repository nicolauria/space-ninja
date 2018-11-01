const GRAVITY = 0.1;


// for randomly selecting from colors
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

let swipes = [];
let sword;
let fruit = [];
let score;
let combos = new Array(30);
combos.fill(0);

function setup() {
  createCanvas(900, 600);
  frameRate(60);

  sword = new Sword(color("#FFF0EE"));
  score = 0;
  textAlign(CENTER);
}

function draw() {
  background(51);

  if (frameCount % 25 === 0) {
    if (noise(frameCount) > 0.5) {
      fruit.push(randomFruit());
    }
  }

  let points = 0;
  for (let i = 0; i < fruit.length; i++) {
    fruit[i].update();
    fruit[i].draw();
    points += (sword.checkForSlice(fruit[i])) ? 1 : 0;
    if (fruit[i].y > height) fruit.splice(i, 1)
  }

  combos.push(points);
  let total = combos.reduce((acc, el) => acc + el);

  if (combos[0] > 0 && total > 1) {
    alert('bonus hit')
    points += (total * 2) - 1;
    combos = new Array(30);
    combos.fill(0);
  } else {
    combos.shift();
  }

  if (frameCount % 2 === 0) {
    sword.update();
  }

  // may need to remove args
  sword.draw(points);
  score += points;

  drawScore();
}

function mouseMoved() {
  sword.swing(mouseX, mouseY);
}

function drawScore() {
  noStroke();
  fill(255);
  textSize(50);
  text(score, 50, 75);
}

function endGame() {
  noLoop();
  console.log('You Lose');
}
