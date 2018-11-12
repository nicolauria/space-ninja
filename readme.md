# Space Ninja

## Background and Overview
Space Ninja is based off the popular game Fruit Ninja. It is a single player game where the inidivual attempts to move his cursor and target objects as they are displayed on the screen. [https://nicolauria.github.io/space-ninja/](https://nicolauria.github.io/space-ninja/)

<kbd>![Alt text](images/space-chop-homepage.png?s=50)</kbd>
<kbd>![Alt text](images/space-chop-game-view.png?s=50)</kbd>
<kbd>![Alt text](images/space-chop-final-score.png?s=50)</kbd>

## Layout
The app consists of a single screen with the following features:
* new game option for beginning a round of Space Ninja
* points counter and lives counter
* cursor for slicing shapes with trailing effect for visuals

## Architecture and Technologies
* Javascript ES6 and the P5 Library for the app structure and game logic
* HTML Canvas for game visuals
* CSS3 for additional styling and game effects

## Specific Features
- function for adding gravity and causing the shapes to move up and down
```
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
```
- function for creating random shapes
```
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
```
## Implementation Timeline
**Day 1:** Create basic entry file and skeleton of other classes<br />
**Day 2:** Add canvas to app and display shapes<br />
**Day 3:** Add functionality for sword swipe and shape destruction<br />
**Day 4:** Style canvas, shapes and game controls<br />
