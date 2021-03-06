const GRAVITY = 0.1;

this.lives = 3;
let swipes = [];
let sword;
let fruit = [];

let score;
let combos = new Array(35);
combos.fill(0);

let last_fruit_sliced;
let lfs;
let comboCounter;
let comboStr;

function setup() {
  createCanvas(900, 600);
  frameRate(60);

  sword = new Sword(color("#FFF0EE"));
  score = 0;
  textAlign(CENTER);
  noLoop();
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
    if (sword.checkForSlice(fruit[i])) {
      points += 1
      last_fruit_sliced = fruit[i];
    } else {
      points += 0;
    }
    fruit[i].update();
    fruit[i].draw();
    if (fruit[i].y > height && fruit[i].b === false) {
      fruit.splice(i, 1)
      removeLife();
      continue;
    }
    if (fruit[i].b === true && fruit[i].sliced) {
      fruit.splice(i, 1);
    }
    if (fruit[i].sliced) {
      fruit.splice(i, 1)
    }
  }

  for (let i = 0; i < explosions.length; i++) {
    if (explosions[i].y > height) {
      explosions.splice(i, 1)
      continue;
    }
    explosions[i].update();
    explosions[i].draw();
  }

  combos.push(points);
  let total = combos.reduce((acc, el) => acc + el);

  if (combos[0] > 0 && total > 1) {
    points += (total * 2) - 1;
    combos = new Array(35);
    combos.fill(0);

    lfs = last_fruit_sliced;
    comboCounter = 30;
    comboStr = "+ " + (total);
  } else {
    combos.shift();
  }

  if (comboCounter > 0) {
    textSize(40);
    fill(255);
    lfs.update();
    text(comboStr, lfs.x, lfs.y);
    comboCounter -= 1;
  }

  if (frameCount % 2 === 0) {
    sword.update();
  }

  sword.draw();
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
  textFont('Josefin Sans');
  if (score > 99) {
    text("Score: " + score, 160, 75);
  } else {
    text("Score: " + score, 140, 75);
  }
  text(this.lives + " lives", 775, 75)
}

function removeLife() {
  if (lives === 0) {
    endGame();
    return;
  }
  this.lives -= 1;
  noLoop();
  fill(255);
  text("-1 life", 440, 305);
  delay(3000).then(() => {
    loop();
  });
}

function endGame() {
  noLoop();
  fill(255);
  text("Game Over", 450, 280);
  text("Your score: " + score, 450, 340);
}
